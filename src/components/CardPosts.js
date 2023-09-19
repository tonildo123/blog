import PropTypes from 'prop-types';
import { Typography, Card, CardContent, Grid, Button, Box } from '@mui/material';
import { Link, NavLink } from 'react-router-dom'; // Importa Link

const CardPosts = ({ lastPost, posts }) => {
  return (
    <Box mt={4}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          {lastPost.map((lastPostItem) => (
            <Link to={`/cards/detail`} state={{ card: lastPostItem}} key={lastPostItem.id}>
              <Card sx={{ height: { xs: 250, sm: 600 } }}>
                <img
                  src={lastPostItem.Photo}
                  alt="Imagen 1"
                  style={{ width: '100%', objectFit: 'fill' }}

                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {lastPostItem.Titulo}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {lastPostItem.Detail}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          ))}
        </Grid>
        <Grid item xs={12} sm={6}>
          {posts.slice(0, 3).map((postItem) => (
            <Link to={`/cards/detail`}state={{ card: postItem}} key={postItem.id}>
              <Card sx={{ display: 'flex', height: 200, border: '1px solid #EBF5FB', }}>
                <img
                  src={postItem.Photo}
                  alt="Imagen 1"
                  style={{ width: '30%', objectFit: 'fill' }}
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
            </Link>
          ))}
        </Grid>
        {posts.length > 3 && (
          <Grid item xs={12}>
            <Button fullWidth 
            component={NavLink} to="/cards/all" state={{ card: posts}}
            sx={{
              backgroundColor: '#2980B9',
              color: 'white',
              fontWeight: 'bold',
            }}>
              Ver más
            </Button>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

CardPosts.propTypes = {
  lastPost: PropTypes.array.isRequired,
  posts: PropTypes.array.isRequired,
};

export default CardPosts;
