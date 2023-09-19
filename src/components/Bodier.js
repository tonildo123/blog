import React from 'react';
import { Box, InputAdornment, IconButton, Typography, Paper, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Bodier = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/mi-mascota-a3b05.appspot.com/o/AssetsFolder%2FFOTO%20GUIA%20MIPYME%20SIN%20NADA.png?alt=media&token=2f60b4c2-76d9-45f6-9f9c-376ce230cc9c")',
        backgroundSize: 'fill',
        backgroundPosition: 'center',
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        height: { sm: '550px', md: '85vh' }
      }}
    >
      <Typography variant="h4" color="white" gutterBottom>
        Financiamiento, programas y servicios para
      </Typography>
      <Typography variant="h4" color="white" gutterBottom>
        empresas
      </Typography>
      <Box sx={{ backgroundColor: 'white', padding: '2px' }}>
        <TextField
          variant="outlined"
          placeholder="Buscar publicación"
          sx={{
            width: '100%',
            maxWidth: '400px',
            backgroundColor: 'white',
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Paper>
  );
};

export default Bodier;
