import React from 'react';
import { Box, OutlinedInput, FormControl, InputAdornment, IconButton, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Bodier = () => {
  return (
    <Box
      component="span"
      sx={{
        border: '1px dashed grey',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundImage:
          'url("https://firebasestorage.googleapis.com/v0/b/mi-mascota-a3b05.appspot.com/o/AssetsFolder%2FFOTO%20GUIA%20MIPYME%20SIN%20NADA.png?alt=media&token=2f60b4c2-76d9-45f6-9f9c-376ce230cc9c")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Typography variant="h3" sx={{color:'white' }}>
       Financiamiento, programas y servicios para
      </Typography>
      <Typography variant="h3" sx={{ marginBottom: '18px', color:'white' }}>
        empresas
      </Typography>
      
      <FormControl
        sx={{
          width: '100%', // Hacer el formulario ancho al 100%
          maxWidth: '65ch', // Establecer un ancho máximo
          backgroundColor:'white',
        }}
        variant="outlined"
      >
        <OutlinedInput
          placeholder="Buscar por titulo, publicacion, nombre...."
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" edge="end" sx={{ color: '#2874A6' }}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          aria-describedby="outlined-weight-helper-text"
          inputProps={{ 'aria-label': 'weight' }}
        />
      </FormControl>
    </Box>
  );
};

export default Bodier;
