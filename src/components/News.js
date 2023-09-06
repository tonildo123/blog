/* eslint-disable */

import { useEffect, useState } from "react";
import { Grid, Box, Typography } from "@mui/material"
import LoadingComponent from './LoadingComponent'
import CardNews from "./CardNews"
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../firebase";

const News = () => {
    const [news, setNews] = useState([]);
    const newCollection = collection(db, "News");


    const getNews = async () => {

        const data = await getDocs(newCollection);
        console.log('data');
        console.log(data);

        setNews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

        console.log('news : ');
        console.log(news);

    }
    useEffect(() => {
        getNews();
    }, [])


    return (
        <Box sx={{ flexGrow: 1, marginLeft:'1%', marginRight:'1%' }}>
            <Box sx={{ flexGrow: 1, textAlign: 'center',marginBottom: '1rem' }}>
                <Typography variant="h4" gutterBottom>
                    Herramientas
                </Typography>
            </Box>
            <Grid container spacing={1}>
                {news.length === 0
                    ? <LoadingComponent />
                    : news.map((card, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <CardNews {...card} />
                        </Grid>
                    ))}
            </Grid>
        </Box>
    )
}

export default News