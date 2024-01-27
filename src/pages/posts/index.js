
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StoreIcon from '@mui/icons-material/Store';


import './style.css'


const ResponsiveCard = (card) => {

    let { state } = useLocation();
    const renderLinksInText = (text) => {
        const regex = /https?:\/\/[^\s]+|www\.[^\s]+/g;
        const parts = text.split(regex);
        const matches = text.match(regex);

        return parts.map((part, index) => (
            <div key={index}>
                {part}
                {matches && matches[index] && (
                    <a
                        href={matches[index].startsWith('http') ? matches[index] : `http://${matches[index]}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {matches[index]}
                    </a>
                )}
            </div>
        ));
    };

    const sendWathsapp = () => {
        const phoneNumber = '3814757398';
        const message = `¡Hola! Estoy interesado en comprar ${state.card.Articulo} por $${state.card.Precio}. ¿Podemos discutir los detalles?\n![Imagen](${state.card.Photo})`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };
    return (
        <Box mt={4} className="centered-card">
            <Card className="responsive-card">
                <img
                    src={state.card.Photo}
                    alt="Imagen 1"
                    style={{ width: '100%', objectFit: 'fill' }}
                />
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        {state.card.Articulo} $ {state.card.Precio}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {renderLinksInText(state.card.Detail)}
                    </Typography>
                    <Button
                        fullWidth
                        startIcon={<StoreIcon />}
                        endIcon={<WhatsAppIcon />}
                        onClick={sendWathsapp}
                        variant="contained">Comprar</Button>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ResponsiveCard;
