import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Card, CardActionArea, CardContent, CardMedia, Grid, Button } from '@mui/material';

const CardPosts = ({ lastPost, posts }) => {
  return (
    <Grid container spacing={2}>
      <Grid item md={6} xs={12}>
        {lastPost.map((lastPostItem) => ( 
          <CardActionArea component="a" href="#" key={lastPostItem.id}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                sx={{
                  width: '100%',
                  display: { xs: 'block', sm: 'block' },
                  objectFit: 'fill',
                }}
                image={lastPostItem.Photo}
                alt={lastPostItem.Photo}
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography component="h2" variant="h5">
                  {lastPostItem.Titulo}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {lastPostItem.Detail}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Continue reading...
                </Typography>
              </CardContent>
            </Card>
          </CardActionArea>
        ))}
      </Grid>
      <Grid item md={6} xs={12} height='33vh'>
        {posts.slice(0, 3).map((postItem) => ( 
          <CardActionArea component="a" href="#" key={postItem.id}>
            <Card sx={{ display: 'flex', height: 200, border: '1px solid #EBF5FB', }}>
              <CardMedia
                component="img"
                sx={{
                  width: 200,
                  display: { xs: 'block', sm: 'block' },
                  objectFit: 'fill',
                }}
                image={postItem.Photo}
                alt={postItem.Photo}
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography component="h2" variant="h5">
                  {postItem.Titulo}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {postItem.Description}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Continue reading...
                </Typography>
              </CardContent>
            </Card>
          </CardActionArea>
        ))}
      </Grid>
      <hr/>
      {posts.length > 3 && (
        <Grid item xs={12}>
          <Button fullWidth variant="outlined" color="primary" sx={{
              backgroundColor: '#2980B9',  
              color: 'white',  
              fontWeight: 'bold',  
            }}>
            Ver más
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

CardPosts.propTypes = {
  lastPost: PropTypes.array.isRequired,
  posts: PropTypes.array.isRequired,
};

export default CardPosts;
