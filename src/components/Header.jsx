// src/components/Header.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';

function Header() {
  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '16px' }}>
          <img
            src="/assets/contacts.png" 
            alt="Contacts Logo"
            style={{ width: '50px', height: '50px', marginRight: '15px' }}
          />
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#FFFFFF' }}>
            Contacts
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Help</Button>
        <Button variant="outlined" color="inherit" sx={{ ml: 2, borderColor: '#FFFFFF', color: '#FFFFFF' }}>
          Sign In
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
