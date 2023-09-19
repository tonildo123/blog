import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import './style.css'


const ResponsiveCard = (card) => {

    let { state } = useLocation();
    console.log('card', state)
    

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
                        {state.card.Titulo}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {state.card.Description}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ResponsiveCard;
