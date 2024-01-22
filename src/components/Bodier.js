import { 
  // Box, InputAdornment, IconButton, 
  Typography, Paper
  // , TextField 
} from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';

const Bodier = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/mi-mascota-a3b05.appspot.com/o/AssetsFolder%2Fecommerce.PNG?alt=media&token=72766855-ade9-4047-a332-129c8382ef56")',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        height: { sx :'400px', sm: '450px' }
      }}
    >
      <Typography variant="h3" color="yellow" gutterBottom>
        Los mejores productos
      </Typography>
      <Typography variant="h3" color="yellow" gutterBottom>
        al mejor precio
      </Typography>      
    </Paper>
  );
};

export default Bodier;
