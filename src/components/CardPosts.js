import PropTypes from 'prop-types';
import { Typography, Card, CardContent, Grid, Button, Box } from '@mui/material';
import { Link, NavLink } from 'react-router-dom'; // Importa Link

const CardPosts = ({ lastPost, posts }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        {lastPost.map((lastPostItem) => (
          <Link to={`/cards/detail`} state={{ card: lastPostItem }} key={lastPostItem.id}>
            <Card sx={{ height: { xs: 250, sm: 450 }}}>
              <img
                src={lastPostItem.Photo}
                alt="Imagen 1"
                style={{ width: '100%', maxHeight: '70%', objectFit: 'contain' }}
              />
              <CardContent sx={{display:'flex', justifyContent:'space-around', px:8}}>
                <Typography variant="h6" gutterBottom sx={{width:'20%'}}>
                  {lastPostItem.Titulo}
                </Typography>
                <Typography variant="body2" color="textSecondary"sx={{width:'80%'}}>
                  {lastPostItem.Detail}
                  wdkjbfcjiweqbfcixnqifbjnbcjew
                  wdkjbfcjiweqbfcixnqifbjnbcjew
                </Typography>
              </CardContent>
            </Card>
          </Link>
        ))}
      </Grid>
      <Grid item xs={12} sm={6}>
        {posts.slice(0, 3).map((postItem) => (
          <Link to={`/cards/detail`} state={{ card: postItem }} key={postItem.id}>
            <Card sx={{ display: 'flex', height: { xs: 100, sm: 150 } }}>
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
                  {postItem.Description}
                </Typography>
                <Box sx={{ display: 'flex', width: '100%',justifyContent:'flex-end' }}>
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
