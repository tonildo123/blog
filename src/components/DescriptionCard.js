import React from 'react';
import { Card, CardContent, CardMedia, Typography, Container } from '@mui/material';

const DescriptionCard = () => {
  return (
    <Container maxWidth="sm">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="https://via.placeholder.com/300x200" // URL de la imagen
          alt="Imagen de ejemplo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Título de la Tarjeta
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Contenido de la tarjeta. Puedes agregar aquí la información que desees mostrar de manera responsiva.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default DescriptionCard;
