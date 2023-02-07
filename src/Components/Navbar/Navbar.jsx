import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });



export default function PrimarySearchAppBar() {

  const [open, setOpen] = React.useState(false);
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const Navigate = useNavigate()

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    
  };

  // const handleMenuSettings = () =>{
  //   // setAnchorEl(null);
  //   // handleMobileMenuClose();
  //   Navigate('./settings')
  // }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleNotification = () =>{
    setOpen(true);
  }

  const handleClick = () =>{
    Navigate('/')
  }

  const handleMenuLogout = () => {
    window.localStorage.removeItem('token');
    Navigate('/firstpage');
  }
  const handleMenuAccount = () =>{
    Navigate('/account');
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}><Person2OutlinedIcon color='info' sx={{m:1}}/>Profile</MenuItem>
      <MenuItem onClick={handleMenuAccount}><AccountBalanceOutlinedIcon color='info' sx={{m:1}}/>My account</MenuItem>
      {/* <MenuItem onClick={handleMenuSettings}><SettingsIcon sx={{m:1}}/>Settings</MenuItem> */}
      <MenuItem  onClick={handleMenuLogout}><LogoutOutlinedIcon color='info' sx={{m:1}} /> Logout</MenuItem>
    </Menu>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right"
                }} open={open} autoHideDuration={5000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="secondary" sx={{ width: '100%', cursor:'pointer' }}>
                        Meditation class is live! Click Here to Join!
                    </Alert>
                </Snackbar>
            </Stack>
      <AppBar id='appbar'color='primary' position="static" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            onClick={handleClick}
            sx={{ display: { sm: 'block',fontWeight:'bold', cursor:'pointer' } }}
          >
            <VolunteerActivismIcon fontSize='medium' sx={{mx:1,}}/>
            Breathly 
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: {  md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="show 5 new notifications"
              color="inherit"
            >
              <Badge badgeContent={1} color="error">
                <NotificationsIcon onClick={handleNotification} fontSize='medium' />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle fontSize='large'/>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu} */}
      {renderMenu}
    </Box>
  );
}