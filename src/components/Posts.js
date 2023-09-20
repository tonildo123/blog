/* eslint-disable */

import { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material"
import LoadingComponent from './LoadingComponent'
import CardPosts from "./CardPosts"
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../firebase";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const newCollection = collection(db, "Posts");

    const [lastPost, setLastPost] = useState([]);
    const newLastCollection = collection(db, "LastPost");

    const getLastPost = async () => {

        const data = await getDocs(newLastCollection);
        console.log('data');
        console.log(data);

        setLastPost(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

        console.log('LastPost : ');
        console.log(lastPost);

    }

    const getPosts = async () => {

        const data = await getDocs(newCollection);
        console.log('data');
        console.log(data);

        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

        console.log('Posts : ');
        console.log(posts);

    }
    useEffect(() => {
        getPosts();
        getLastPost();
    }, [])




    return (
        <Box mt={1} textAlign="center">
            <Typography variant="h4" color="grey" gutterBottom>
                Novedades
            </Typography>
            {posts.length === 0 ? <LoadingComponent /> : <CardPosts lastPost={lastPost} posts={posts} />}
        </Box >

    )
}

export default Posts


