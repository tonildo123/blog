import React from 'react';
import { Typography, Card, CardContent, Grid } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const AllPosts = () => {
  let { state } = useLocation();
  console.log('all post', state)

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return (
        <span>
          {text.substring(0, maxLength)}
          <span style={{ color: 'blue' }}>{`... ver más >>`}</span>
        </span>
      );
    }
    return text;
  }

  const truncateTextTitle = (text, maxLength) => {
    if (text.length > maxLength) {
      return ( text.substring(0, maxLength) + '...');
    }
    return text;
  }

  return (    
      <Grid container spacing={3} sx={{my:'2%', px:'5%'}}>
        {state.card.map((postItem) => (
          <Grid item xs={12} sm={4} key={postItem.id}>
            <Link to={`/cards/detail`} state={{ card: postItem }} style={{ textDecoration: 'none' }}>
              <Card sx={{ display: 'flex', height: 200, border: '1px solid #EBF5FB' }}>
                <img
                  src={postItem.Photo}
                  alt="Imagen 1"
                  style={{ width: '30%', objectFit: 'contain' }}
                />
                <CardContent sx={{ display: 'flex',flexDirection:'column', px: 1 }}>                
                  <Typography sx={{ width: '100%',fontWeight:'bold', textAlign: 'center' }}>
                    {truncateTextTitle(postItem.Titulo, 40)}
                  </Typography>
                  <Typography  sx={{ width: '100%', px: 2, textAlign: 'left' }}>
                    {truncateText(postItem.Detail, 100)}
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
