/* eslint-disable */
import { useEffect, useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
} from '@mui/material';
import Swal from 'sweetalert2'
import CircularProgress from '@mui/material/CircularProgress';
import { db, uploadFile } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { postArraySuccess } from '../state/ArrayPostSlice';

const BlogFile = () => {

    const dispatch = useDispatch()
    const [precio, setPrecio] = useState('');
    const [articulo, setArticulo] = useState('');
    const [detalle, setDetalle] = useState('');
    const [imagen, setImagen] = useState(null);
    const [imagesName, setImagesName] = useState(null);
    const [loading, setLoading] = useState(false);

    const state = useSelector(state => state)

    useEffect(() => {
        console.log('state : ', JSON.stringify(state.postuser.post.orden, null, 5))
    }, [])



    const handlePrecioChange = (event) => {
        setPrecio(event.target.value);
    };
    const handlearticuloChange = (event) => {
        setArticulo(event.target.value);
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

        console.log('precio:', precio);
        console.log('Título:', articulo);
        console.log('detalle:', detalle);
        console.log('Imagen:', imagen);
        const orden = parseInt(state.postuser.post.orden) + 1;
        console.log('orden ', orden)
           
            try {

                const onlyPost = collection(db, "Posts");

                const url = await uploadFile(imagen, imagesName, 'PostsFolder')


                const dataToCreate = {
                    Detail: detalle,
                    Photo: url,
                    Tag: 'Posts',
                    Articulo: articulo,
                    Precio:precio,
                    orden: orden
                };

                await addDoc(onlyPost, dataToCreate);
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

                <TextField
                    label="Articulo"
                    variant="outlined"
                    fullWidth
                    value={articulo}
                    onChange={handlearticuloChange}
                    margin="normal"
                />

                <TextField
                    label="Precio"
                    variant="outlined"
                    type='number'
                    fullWidth
                    value={precio}
                    onChange={handlePrecioChange}
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
                    disabled={!articulo || !imagen}
                    sx={{ marginTop: '20px' }}
                >
                    Subir
                </Button>
            </form>
        </Box>
    );
};

export default BlogFile;
