/*eslint-disable*/
import PropTypes from 'prop-types';
import { Typography, Card, CardContent, Grid, Button, Box } from '@mui/material';
import { Link, NavLink } from 'react-router-dom'; // Importa Link
import { useEffect } from 'react';

const CardPosts = ({ lastPost, posts }) => {

  useEffect(() => {
    console.log('lastpost', lastPost)
  }, [])


  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return (
        <span>
          {text.substring(0, maxLength)}
          <span style={{ color: 'blue' }}>{`... ver más..`}</span>
        </span>
      );
    }
    return text;
  }

  const truncateTextTitle = (text, maxLength) => {
    if (text.length > maxLength) {
      return (text.substring(0, maxLength) + '...');
    }
    return text;
  }


  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Link to={`/cards/detail`} state={{ card: lastPost }} style={{ textDecoration: 'none' }}>
        <Card sx={{ height: { xs: 'auto', sm: 450 }, marginBottom: 2 }}>
            <img
              src={lastPost.Photo}
              alt="Imagen 1"
              style={{ width: '100%', maxHeight: '70%', objectFit: 'contain' }}
            />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', py: 1 }}>
              <Typography sx={{ width: '100%', fontWeight: 'bold', textAlign: 'left' }}>
                {truncateTextTitle(lastPost.Articulo, 80)} - $ {lastPost.Precio}
              </Typography>
              <Typography sx={{ width: '100%', mb: 1, textAlign: 'left' }}>
                {truncateText(lastPost.Detail, 180)}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
      <Grid item xs={12} sm={6}>
        {posts.slice(1, 4).map((postItem) => (
          <Link to={`/cards/detail`} state={{ card: postItem }} key={postItem.id} style={{ textDecoration: 'none' }}>
            <Card sx={{ display: 'flex', height: { xs: 150, sm: 150 }, marginBottom: 2 }}>
              <img
                src={postItem.Photo}
                alt="Imagen 1"
                style={{ width: '30%', objectFit: 'contain' }}
              />
              <CardContent sx={{ display: 'flex', flexDirection: 'column', py: 1 }}>
                <Typography sx={{ width: '100%',  fontWeight: 'bold', textAlign: 'left' }}>
                  {truncateTextTitle(postItem.Articulo, 40)}  - $ {lastPost.Precio}
                </Typography>
                <Typography sx={{ width: '100%', mb: 1, textAlign: 'left' }}>
                  {truncateText(postItem.Detail, 100)}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        ))}
      </Grid>
      {posts.length > 3 && (
        <Grid item xs={12} sm={12} width="100%" sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            component={NavLink} to="/cards/all" state={{ card: posts }}
            sx={{
              backgroundColor: 'white',
              color: '#2980B9',
              fontWeight: 'bold',
            }}>
            {`>>`} Ver más {`>>`}
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
