/* eslint-disable */

import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material"
import LoadingComponent from './LoadingComponent'
import CardPosts from "./CardPosts"
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../firebase";
import { postArraySuccess } from "../state/ArrayPostSlice";
import { useSelector, useDispatch } from 'react-redux';
import { postSuccess } from "../state/PostSlice";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const dispatch = useDispatch();
    const state = useSelector(state => state)
    const newCollection = collection(db, "Posts");
    const [lastPost, setLastPost] = useState([]);


    const getPosts = async () => {
        const data = await getDocs(newCollection);
        const postsData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        postsData.sort((a, b) => b.orden - a.orden);
        setPosts(postsData);
        setLastPost(postsData[0]);

        const post = {
            id: postsData[0].id,
            Detail: postsData[0].Detail,
            Photo: postsData[0].Photo,
            Tag: postsData[0].Tag,
            Titulo: postsData[0].Titulo,
            orden: postsData[0].orden,
          };

          dispatch(postSuccess(post))   
        
    }

    useEffect(() => {
        getPosts();
        if (posts.length > 0) {
            for (let i = 0; i < posts.length; i++) {
              const post = {
                id: posts[i].id,
                Detail: posts[i].Detail,
                Photo: posts[i].Photo,
                Tag: posts[i].Tag,
                Titulo: posts[i].Titulo,
                orden: posts[i].orden,
              };
      
              // Verifica si la mascota ya existe en el estado antes de agregarla
              const isPostAlreadyAdded = state.userPostsArray.posts.some(
                (existingPost) => existingPost.id === post.id
              );
      
              if (!isPostAlreadyAdded) {
                dispatch(postArraySuccess(post));
              }
            }
          }
    }, [posts.length])


    return (
        <Box mt={1} textAlign="center">
            <Typography variant="h4" color="grey" gutterBottom>
                Novedades
            </Typography>
            {posts.length === 0
                ? <LoadingComponent />
                : <CardPosts lastPost={lastPost} posts={posts} />}
        </Box >

    )
}

export default Posts


