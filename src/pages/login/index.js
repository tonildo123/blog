import {useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { loggearme } from '../../state/LoginSlice';
import { useDispatch } from 'react-redux';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Ir a Secretaría de Estado de MiPyME y Empleo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const defaultTheme = createTheme();


export default function SignIn() {

  const distpach = useDispatch()
  
  const [error, setError] = useState(null);

  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    const email= data.get('email')
    const password= data.get('password')

    try {
      await signInWithEmailAndPassword(auth, email, password) 
          .then(async (userCredential) => {
              const user = {
                  id: userCredential.user.uid,
                  email: email,
                  password: password
              }
              distpach(loggearme(user))
          })
          .catch((error) => {
              setError(error.message);
          })

  } catch (error) {
      setError(error.message);

  }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          {/* <img src="https://firebasestorage.googleapis.com/v0/b/mi-mascota-a3b05.appspot.com/o/AssetsFolder%2Fguia%20mipyme%20LOGOP%20TRANSPARENTE.png?alt=media&token=cae5b6b7-ec10-43af-bbc7-f5ac87501336" 
               alt="Logo" style={{ width: '100px', height: '40px', marginRight: '8px', 
             }}/>  
           */}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, border:1, padding:2 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo electronico"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recuerdame"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Acceder
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  ¿Has olvidado tu contraseña?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}