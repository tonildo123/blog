import { Typography, Card, CardMedia, CardContent,  } from '@mui/material';
import { NavLink } from 'react-router-dom';

const CardNews = (card, index) => {
  return (

    <Card sx={{ display: 'flex', border: '1px solid #EBF5FB', }} index={index}>
      <CardMedia
        component="img"
        sx={{ width: 200, borderRadius: '50%', }}
        image={card.Photo}
        alt="Live from space album cover"
      />
      <CardContent sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6" component="div">
            {card.Description}
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'auto' }}>           
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>              
              <Typography component={NavLink} to="/cards/detail" state={{ card: card}} variant="h6" >
                {`>>`} ver mas
              </Typography>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardNews;
