import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';

const PostMasHerramientas = () => {


  return (
    <Box mt={4}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Card>
            <img
              src="https://via.placeholder.com/300x200"
              alt="Imagen 1"
              style={{ width: '100%' }}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Título de la Entrada
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Descripcion corta de la entrada.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <img
              src="https://via.placeholder.com/300x200"
              alt="Imagen 2"
              style={{ width: '100%' }}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Título de la Entrada
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Descripcion corta de la entrada.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <img
              src="https://via.placeholder.com/300x200"
              alt="Imagen 3"
              style={{ width: '100%' }}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Título de la Entrada
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Descripcion corta de la entrada.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default PostMasHerramientas