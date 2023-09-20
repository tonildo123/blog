import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Hidden, Button, Tooltip, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
const pages = ['Inicio', 'Quienes somos', 'Preguntas frecuentes'];

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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography component={NavLink}
                    to={`${page == 'Inicio' ? "/" : "/"}`} textAlign="center" style={{ color: 'black' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
            {/**para el menu en mobile */}
          </Box>

          <img src="https://firebasestorage.googleapis.com/v0/b/mi-mascota-a3b05.appspot.com/o/AssetsFolder%2Fguia%20mipyme%20LOGOP%20TRANSPARENTE.png?alt=media&token=cae5b6b7-ec10-43af-bbc7-f5ac87501336"
            alt="Logo" style={{
              width: '100px', height: '40px', marginRight: '8px',
              display: theme.breakpoints.up('md') ? 'flex' : 'flex',
            }} />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={NavLink}
                to={`${page == 'Inicio' ? "/" : "/"}`}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box>
            <Box
              display="flex"
              alignItems="center"
            > <Tooltip title="Buscar aqui">
                <IconButton onClick={handleOpenSearchMenu} sx={{ px: 3 }}>
                  <SearchIcon />
                </IconButton>
              </Tooltip>
              <Hidden mdDown>
                <Typography variant="body1" sx={{ color: 'black', px: 1, backgroundColor: '#D5DBDB' }}>
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