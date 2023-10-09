import PropTypes from 'prop-types';
import { Typography, Card, CardContent, Grid, Button, Box } from '@mui/material';
import { Link, NavLink } from 'react-router-dom'; // Importa Link

const CardPosts = ({ lastPost, posts }) => {

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        {lastPost.map((lastPostItem) => (
          <Link to={`/cards/detail`} state={{ card: lastPostItem }} key={lastPostItem.id} style={{ textDecoration: 'none' }}>
            <Card sx={{ height: { xs: 250, sm: 450 } }}>
              <img
                src={lastPostItem.Photo}
                alt="Imagen 1"
                style={{ width: '100%', maxHeight: '70%', objectFit: 'contain' }}
              />
              <CardContent sx={{ display: 'flex', justifyContent: 'space-around', px: 8 }}>
                <Typography variant="h6" gutterBottom sx={{ width: '25%', height: '100%' }}>
                  {lastPostItem.Titulo}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ width: '75%', height: '100%', px: 2 }}>
                  {truncateText(lastPostItem.Detail, 20)}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        ))}
      </Grid>
      <Grid item xs={12} sm={6}>
        {posts.slice(0, 3).map((postItem) => (
          <Link to={`/cards/detail`} state={{ card: postItem }} key={postItem.id} style={{ textDecoration: 'none' }}>
            <Card sx={{ display: 'flex', height: { xs: 100, sm: 150 } }}>
              <img
                src={postItem.Photo}
                alt="Imagen 1"
                style={{ width: '30%', objectFit: 'contain' }}
              />
              <CardContent sx={{ flex: 'none' }}>
                <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
                  <Typography component="h2" variant="h5" sx={{ mx:1 }}>
                    {postItem.Titulo}
                  </Typography>
                  <Typography variant="subtitle1" paragraph sx={{ mx:1 }}>
                    {truncateText(postItem.Detail, 20)}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', width: '100%', justifyContent: 'flex-end', alignItems:'flex-end' }}>
                  <Typography variant="subtitle1" color="primary">
                    {`>>`} ver mas
                  </Typography>
                </Box>
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
