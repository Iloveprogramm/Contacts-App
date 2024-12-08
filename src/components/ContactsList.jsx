// src/components/ContactsList.jsx
import React from 'react';
import { Box, Grid, Avatar, Typography } from '@mui/material';

function ContactsList({ contacts, getColorById }) {
  return (
    <>
      {contacts.map((contact) => (
        <Grid item xs={12} sm={6} md={4} key={contact.id}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '20px',
              backgroundColor: '#FFFFFF',
              borderRadius: '15px',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Avatar
              sx={{
                width: 60,
                height: 60,
                marginBottom: '10px',
                backgroundColor: getColorById(contact.id),
              }}
            >
              {contact.name.charAt(0)}
            </Avatar>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              {contact.name}
            </Typography>
            <Typography variant="body2">{contact.email}</Typography>
            <Typography variant="body2">{contact.phone}</Typography>
            <Typography variant="body2">{contact.company?.name}</Typography>
            <Typography variant="body2">{contact.address?.city}</Typography>
          </Box>
        </Grid>
      ))}
    </>
  );
}

export default ContactsList;
