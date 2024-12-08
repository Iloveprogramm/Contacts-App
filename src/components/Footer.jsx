// src/components/Footer.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: '#FFF',
        textAlign: 'center',
        padding: '20px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <img
        src="/assets/contacts.png"
        alt="Footer Logo"
        style={{ width: '80px', height: '80px', marginBottom: '10px' }}
      />
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '5px' }}>
        Contacts App
      </Typography>
      <Typography variant="body2">© 2024 Contacts App | All rights reserved</Typography>
    </Box>
  );
}

export default Footer;
