import { Box, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Grid container spacing={2} sx={{marginRight:'1%', marginLeft:'1%'}}>
      <Grid item xs={12} sm={4}>
        <Box>
          <h2>Sección 1</h2>
          <p>Contenido de la sección 1</p>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box textAlign="center">
          <h2>Sección 2</h2>
          <p>Contenido de la sección 2</p>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box>
          <h2>Sección 3</h2>
          <p>Contenido de la sección 3</p>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
