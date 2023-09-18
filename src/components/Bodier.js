import React from 'react';
import { Box, OutlinedInput, FormControl, InputAdornment, IconButton, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Bodier = () => {
  return (
    <Box
      sx={{
        border: '1px dashed grey',
        width: '100%', // Ancho al 100% en pantallas móviles
        maxWidth: { xs: '100%', md: '100%' }, // Establece un ancho máximo
        height: { xs: '450px', md: '600px' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage:
          'url("https://firebasestorage.googleapis.com/v0/b/mi-mascota-a3b05.appspot.com/o/AssetsFolder%2FFOTO%20GUIA%20MIPYME%20SIN%20NADA.png?alt=media&token=2f60b4c2-76d9-45f6-9f9c-376ce230cc9c")',
        backgroundSize: 'fill',
        backgroundPosition: 'center',
      }}
    >
      <Typography variant="h3" sx={{ color: 'white', fontSize: { xs: '24px', md: '48px' }}}>
        Financiamiento, programas y servicios para
      </Typography>
      <Typography variant="h3" sx={{ color: 'white', fontSize: { xs: '24px', md: '48px' }}}>
        empresas
      </Typography>

      <FormControl
        sx={{
          width: { xs: '300px', md: '65ch' },
          backgroundColor: 'white',
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
