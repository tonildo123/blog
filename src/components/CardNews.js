import { Card, CardMedia } from '@mui/material';
import { NavLink } from 'react-router-dom';

const CardNews = (card, index) => {
  return (
    <Card index={index}>
      <NavLink to="/cards/detail" state={{ card: card }}>
        <CardMedia
          component="img"
          sx={{
            width: '100%',
            height: 200,
            objectFit: 'contain',
            my: 1
          }}
          image={card.Photo}
          alt="Imagen de la noticia"
        />
      </NavLink>
    </Card>
  );
};

export default CardNews;
