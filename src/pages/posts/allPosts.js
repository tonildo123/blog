import React from 'react';
import { Typography, Card, CardContent, Grid } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const AllPosts = () => {
  let { state } = useLocation();
  console.log('all post', state)

  return (    
      <Grid container spacing={3} sx={{my:'2%', px:'5%'}}>
        {state.card.map((postItem) => (
          <Grid item xs={12} sm={4} key={postItem.id}>
            <Link to={`/cards/detail`} state={{ card: postItem }}>
              <Card sx={{ display: 'flex', height: 200, border: '1px solid #EBF5FB' }}>
                <img
                  src={postItem.Photo}
                  alt="Imagen 1"
                  style={{ width: '30%', objectFit: 'contain' }}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography component="h2" variant="h5">
                    {postItem.Titulo}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    {postItem.Detail}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
  )
}

export default AllPosts;
