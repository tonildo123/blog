/* eslint-disable */
import { useEffect, useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from '@mui/material';
import Swal from 'sweetalert2'
import CircularProgress from '@mui/material/CircularProgress';
import { db, uploadFile } from '../firebase';
import { collection, addDoc, getDocs, where } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { postSuccess } from '../state/PostSlice';
import { postArraySuccess } from '../state/ArrayPostSlice';

const BlogFile = () => {

    const dispatch = useDispatch()
    const [categoria, setCategoria] = useState('');
    const [titulo, setTitulo] = useState('');
    const [detalle, setDetalle] = useState('');
    const [imagen, setImagen] = useState(null);
    const [imagesName, setImagesName] = useState(null);
    const [loading, setLoading] = useState(false);

    const state =  useSelector(state => state)

    useEffect(() => {
      console.log('state : ', JSON.stringify(state.postuser.post.orden, null, 5))
    }, [])
    
  

    const handleCategoriaChange = (event) => {
        setCategoria(event.target.value);
    };
    const handleTituloChange = (event) => {
        setTitulo(event.target.value);
    };

    const handleDetalleChange = (event) => {
        setDetalle(event.target.value);
    };

    const handleImagenChange = (event) => {
        const file = event.target.files[0];
        setImagen(file);
        const fileName = file.name;
        setImagesName(fileName)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true)

        console.log('Categoría:', categoria);
        console.log('Título:', titulo);
        console.log('detalle:', detalle);
        console.log('Imagen:', imagen);
        const orden = parseInt(state.postuser.post.orden) + 1;
        console.log('orden ', orden)

        if (categoria == 'Novedades') {

            // primero obtener la referencia de la imagen


            try {

                const onlyPost = collection(db, "Posts");

                const url = await uploadFile(imagen, imagesName, 'PostsFolder')


                const dataToCreate = {
                    Detail: detalle,
                    Photo: url,
                    Tag: 'Posts',
                    Titulo: titulo,
                    orden: orden
                };

                await addDoc(onlyPost, dataToCreate);
                dispatch(postSuccess(dataToCreate))
                dispatch(postArraySuccess(dataToCreate))
                setLoading(false)
                Swal.fire({
                    title: 'Guadado exitosamente!',
                    icon: 'success',
                    showCancelButton: true,
                    confirmButtonText: 'OK',
                })

            }
            catch (error) {

                console.log(error)
                setLoading(false)

                Swal.fire({
                    title: 'Ocurrio un error!',
                    icon: 'error',
                    showCancelButton: true,
                    confirmButtonText: 'OK',

                })

            }

        } else {
            console.log('logica herramientas')
            setLoading(false)
            // falta realizar la logica para herramientas 

        }
    };

    return (

        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '20px',
                py: '3%'
            }}
        >
            <Typography variant="h5" gutterBottom>
                Formulario de Carga
            </Typography>
            {loading && <CircularProgress />}
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
                    label="Descripcion"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value={detalle}
                    onChange={handleDetalleChange}
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
    );
};

export default BlogFile;
