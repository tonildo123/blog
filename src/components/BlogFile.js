import React, { useState } from 'react';
import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from '@mui/material';

const BlogFile = () => {
    const [categoria, setCategoria] = useState('');
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagen, setImagen] = useState(null);


    const handleCategoriaChange = (event) => {
        setCategoria(event.target.value);
    };
    const handleTituloChange = (event) => {
        setTitulo(event.target.value);
    };

    const handleDescripcionChange = (event) => {
        setDescripcion(event.target.value);
    };

    const handleImagenChange = (event) => {
        // Manejar la carga de la imagen aquí
        const file = event.target.files[0];
        setImagen(file);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // En este punto, puedes enviar la categoría, el título, la descripción, la imagen, etc., al servidor o realizar otras acciones
        console.log('Categoría:', categoria);
        console.log('Título:', titulo);
        console.log('Descripción:', descripcion);
        console.log('Imagen:', imagen);
    };

    return (
        <Container
            maxWidth="sm"
            sx={{
                height: { xs: '450px', md: '80vh' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '20px',
            }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '20px',
                }}
            >
                <Typography variant="h5" gutterBottom>
                    Formulario de Carga
                </Typography>
                <form onSubmit={handleSubmit}>
                    <FormControl fullWidth variant="outlined" margin="normal">
                        <InputLabel id="categoria-label">Categoría</InputLabel>
                        <Select
                            labelId="categoria-label"
                            id="categoria"
                            label="Categoría"
                            value={categoria}
                            onChange={handleCategoriaChange}
                        >
                            <MenuItem value="Novedades">Novedades</MenuItem>
                            <MenuItem value="Herramientas">Herramientas</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        label="Título"
                        variant="outlined"
                        fullWidth
                        value={titulo}
                        onChange={handleTituloChange}
                        margin="normal"
                    />
                    <TextField
                        label="Descripción"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        value={descripcion}
                        onChange={handleDescripcionChange}
                        margin="normal"
                    />

                    <input
                        type="file"
                        accept="image/*"
                        id="imagen"
                        onChange={handleImagenChange}
                        style={{ display: 'none' }}
                    />
                    <label htmlFor="imagen">
                        <Button
                            variant="outlined"
                            component="span"
                            color="primary"
                            fullWidth
                        >
                            Cargar Imagen
                        </Button>
                    </label>
                    <Typography variant="body1" sx={{ marginTop: '10px' }}>
                        {imagen ? `Imagen seleccionada: ${imagen.name}` : 'Ninguna imagen seleccionada'}
                    </Typography>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        disabled={!categoria || !imagen}
                        sx={{ marginTop: '20px' }}
                    >
                        Subir
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default BlogFile;
