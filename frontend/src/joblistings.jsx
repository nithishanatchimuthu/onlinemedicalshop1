// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Container, TextField, Grid, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import WorkHistoryTwoToneIcon from '@mui/icons-material/WorkHistoryTwoTone';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import image from './medimg1.jpeg';
import image2 from './medimg2.avif';
import image3 from './medimg3.avif';
import image4 from './medimg4.avif';
import image5 from './medimg5.avif';
import image6 from './medimg8.jpeg';
import image8 from './medimg6.avif';
import image7 from './medimg9.jpeg';
import image9 from './medimg7.avif';
import { Link as Defpath } from 'react-router-dom';
const cards = [
  { id: 1, name: 'Antibiotics', image: image2 ,path: '/jobinfostat'},
  { id: 2, name: 'Paracetamol', image: image3,path: '/jobinfoai' },
  { id: 3, name: 'Aspirin', image: image4 },
  { id: 4, name: 'Ibuprofen', image: image9 },
  { id: 5, name: 'Acetaminophen', image: image6 },
  { id: 6, name: 'diphenhydramine', image: image },
  { id: 7, name: 'Ketoprofen', image: image5 },
  { id: 8, name: 'Naproxen ', image: image7 },
  { id: 9, name: 'phenylephrine', image: image8 },
];

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(cards);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterJobs(query);
  };


  const filterJobs = (query) => {
    const filteredJobs = cards.filter((card) => {
      const nameMatch = card.name.toLowerCase().includes(query.toLowerCase());
      return nameMatch;
    });

    setFilteredJobs(filteredJobs);
  };

  const pages = [
    { label: 'search', path: '/joblistings' },
    { label: 'order', path: '/resume' },
    { label: 'about', path: '/postingmain' },
  ];
   const settings = ['Profile', { label: 'Signup', path: '/login' }, { label: 'Login', path: '/signin' }];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <WorkHistoryTwoToneIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                MEDMART
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
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
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <Button
                      key={page.label}
                      component={Defpath}
                      to={page.path}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      {page.label}
                    </Button>
                  ))}
                </Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'poppins ',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              ></Typography>
               <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map((page) => (
        <Button
          key={page.label}
          component={Defpath}
          to={page.path}
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          {page.label}
        </Button>
      ))}
    </Box>

     <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting.label} onClick={handleCloseUserMenu}>
                      {setting.path ? (
                        <Defpath to={setting.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                          <Typography textAlign="center">{setting.label}</Typography>
                        </Defpath>
                      ) : (
                        <Typography textAlign="center">{setting.label}</Typography>
                      )}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <br />
        <br />
        <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Find your medicine!
              </Typography><br/><br/>
        <Container maxWidth="md">
          <TextField
            label="Search medicine"
            fullWidth
            variant="outlined"
            value={searchQuery}
            onChange={handleSearch}
          /><br/><br/><br/>
          <Grid container spacing={2}>
            {filteredJobs.map((job) => (
  <Grid item xs={12} sm={6} md={4} key={job.id}>
    {/* <Paper elevation={3} sx={{ padding: '1rem' }}> */}
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardMedia component="img" sx={{ pt: '3.25%' }} image={job.image} alt={job.name} />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {job.name}
          </Typography>
        </CardContent>
        <CardActions>
        <Defpath to={job.path} style={{ textDecoration: 'none' }}>

          <Button size="small">View</Button>
          </Defpath>
          <Button size="small">order</Button>
        </CardActions>
      </Card>
    {/* </Paper> */}
  </Grid>
))};
      </Grid>
          <br />
          <br />
        </Container>
        
      </>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          MEDMART
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default SearchPage;