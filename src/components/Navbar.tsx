import { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import introData from '../data/intro.json';

const pages = [
  { title: '聯盟技術', path: '/tech' },
  { title: '聯盟服務', path: '/services' },
  { title: '最新消息', path: '/news' },
  {
    title: '關於聯盟',
    submenu: [
      { title: '聯盟介紹', path: '/about' },
      { title: '聯盟成員', path: '/members' },
      { title: '加入我們', path: '/join' },
    ],
  },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElAbout, setAnchorElAbout] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenAboutMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElAbout(event.currentTarget);
  };

  const handleCloseAboutMenu = () => {
    setAnchorElAbout(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo - Desktop */}
          <Box
            component={RouterLink}
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              textDecoration: 'none',
            }}
          >
            <img src={introData.logo_transparent_white} alt="Logo" style={{ height: '40px' }} />
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
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
                page.submenu ? (
                  page.submenu.map((subItem) => (
                    <MenuItem
                      key={subItem.title}
                      onClick={() => {
                        handleCloseNavMenu();
                        window.scrollTo(0, 0);
                      }}
                      component={RouterLink}
                      to={subItem.path}
                    >
                      <Typography textAlign="center">{subItem.title}</Typography>
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem
                    key={page.title}
                    onClick={() => {
                      handleCloseNavMenu();
                      window.scrollTo(0, 0);
                    }}
                    component={RouterLink}
                    to={page.path}
                  >
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                )
              ))}
            </Menu>
          </Box>

          {/* Logo - Mobile */}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              textDecoration: 'none',
            }}
          >
            <img src={introData.logo_transparent_white} alt="Logo" style={{ height: '40px' }} />
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              page.submenu ? (
                <Box key={page.title}>
                  <Button
                    onClick={handleOpenAboutMenu}
                    onMouseEnter={handleOpenAboutMenu}
                    sx={{
                      my: 2,
                      color: 'white',
                      display: 'block',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    {page.title}
                  </Button>
                  <Menu
                    anchorEl={anchorElAbout}
                    open={Boolean(anchorElAbout)}
                    onClose={handleCloseAboutMenu}
                    MenuListProps={{
                      onMouseLeave: handleCloseAboutMenu,
                    }}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                  >
                    {page.submenu.map((subItem) => (
                      <MenuItem
                        key={subItem.title}
                        onClick={() => {
                          handleCloseAboutMenu();
                          window.scrollTo(0, 0);
                        }}
                        component={RouterLink}
                        to={subItem.path}
                        sx={{
                          '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.04)',
                          },
                        }}
                      >
                        {subItem.title}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : (
                <Button
                  key={page.title}
                  component={RouterLink}
                  to={page.path}
                  onClick={() => {
                    handleCloseNavMenu();
                    window.scrollTo(0, 0);
                  }}
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  {page.title}
                </Button>
              )
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;