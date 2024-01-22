/* eslint-disable */
import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const menuDrawerUnlogged = [{ 'label': 'Inicio', 'ruta': '/nosotros' },
{ 'label': 'Login', 'ruta': '/login/admin' },];

const menuDrawerLogged = [{ 'label': 'Home', 'ruta': '/home' },
];


function NavBar() {

  const dispatch = useDispatch()
  const { logged } = useSelector(state => state.logger.user)
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
    <AppBar position="static" sx={{ backgroundColor: '#FDFEFE', marginLeft: 0, marginRight: 0, }}>
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: { xs: 'space-between' } }}>
          <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
            {/**para el menu en mobile */}
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
              {!logged && menuDrawerUnlogged.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Typography component={NavLink}
                    to={`${page.ruta}`} textAlign="center" style={{ color: 'black' }}>{page.label}</Typography>
                </MenuItem>
              ))}
              {logged && menuDrawerLogged.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Typography
                    component={NavLink}
                    to={`${page.ruta}`}
                    textAlign="center"
                    style={{ color: 'black' }}>{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
            {/**para el menu en mobile */}
          </Box>

          <img src="https://firebasestorage.googleapis.com/v0/b/mi-mascota-a3b05.appspot.com/o/AssetsFolder%2Ficonoecommerce.PNG?alt=media&token=1e562765-58d5-4f43-9a0a-ef3124927b03"
            alt="Logo" style={{
              width: '40px', height: '40px', marginRight: '8px',
              display: theme.breakpoints.up('md') ? 'flex' : 'flex',
            }} />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {!logged &&
              menuDrawerUnlogged.filter(page => page.label != 'Suscribirse')
                .map((page) => (
                  <Button
                    key={page}
                    component={NavLink}
                    to={`${page.ruta}`}
                    sx={{ my: 2, color: 'black', display: 'block' }}
                  >
                    {page.label}
                  </Button>
                ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;