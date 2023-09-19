import React from 'react';
import { Typography, Card, CardMedia, CardContent, IconButton, Button } from '@mui/material';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';

const CardNews = (card, index) => {
  return (
    <Card sx={{ display: 'flex',border: '1px solid #2980B9', }}>
      <CardMedia
        component="img"
        sx={{ width: 151, borderRadius: '50%', }}
        image={card.Photo}
        alt="Live from space album cover"
      />
      <CardContent sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6" component="div">
            {card.Description}
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'auto' }}>
            <Button variant="contained" color="primary" style={{ alignSelf: 'flex-start' }}>
              Detalle
            </Button>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton aria-label="previous">
                <EditNoteIcon />
              </IconButton>
              <IconButton aria-label="play/pause">
                <DeleteIcon sx={{ height: 38, width: 38 }} />
              </IconButton>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardNews;
