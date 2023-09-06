import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Hidden, Button, Tooltip, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';
const pages = ['Inicio', 'Quienes somos', 'Terminos y condiciones', 'Preguntas frecuentes'];

function NavBar() {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElSearch, setAnchorElSearch] = React.useState(null);

  const handleOpenSearchMenu = (event) => {
    setAnchorElSearch(event.currentTarget);
  };
  const handleCloseSearchMenu = () => {
    setAnchorElSearch(null);
  };


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar position="static" sx={{ backgroundColor: '#FDFEFE', width: '100%', marginLeft: 0, marginRight: 0, }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'center' }}>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            {/**para el menu en mobile */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none', color: 'black' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" style={{ color: 'black' }}>{page}</Typography> {/**para telefono */}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <img src="https://firebasestorage.googleapis.com/v0/b/mi-mascota-a3b05.appspot.com/o/AssetsFolder%2Fguia%20mipyme%20LOGOP%20TRANSPARENTE.png?alt=media&token=cae5b6b7-ec10-43af-bbc7-f5ac87501336"
            alt="Logo" style={{
              width: '100px', height: '40px', marginRight: '8px',
              display: theme.breakpoints.up('md') ? 'flex' : 'none',
            }} />


          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Box
              display="flex"
              alignItems="center"
            > <Tooltip title="Buscar aqui">
              <IconButton onClick={handleOpenSearchMenu} sx={{ p: 2 }}>
                <SearchIcon />
              </IconButton>
              </Tooltip>
              <Hidden mdDown>
                <Typography variant="body1" sx={{ color: 'black', mr: 1 }}>
                  Suscribirse
                </Typography>
              </Hidden>
            </Box>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElSearch}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElSearch)}
              onClose={handleCloseSearchMenu}
            >
              <MenuItem>
                {/* Aquí puedes colocar tu campo de búsqueda o el componente que desees */}
                <input type="text" placeholder="Buscar..." />
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;