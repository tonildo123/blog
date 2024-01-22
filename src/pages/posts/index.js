
import { Card, CardContent, Typography, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';


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
                </CardContent>
            </Card>
        </Box>
    );
};

export default ResponsiveCard;
