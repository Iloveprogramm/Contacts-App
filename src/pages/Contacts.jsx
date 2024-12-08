// src/pages/Contacts.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  Container,
  ButtonGroup,
  Button,
  CircularProgress,
  Paper,
  Grid,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TableContainer from '@mui/material/TableContainer';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import ContactsTable from '../components/ContactsTable';
import ContactsList from '../components/ContactsList';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2E3B55',
    },
    secondary: {
      main: '#FF6F61',
    },
    background: {
      default: '#F8FAFB',
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
  },
});

function Contacts() {
  //initialization state
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState('table'); 
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);

  //use axios methods to return data from the api
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setContacts(response.data);
        setFilteredContacts(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch contacts.');
        setLoading(false);
      });
  }, []);

  //search function
  useEffect(() => {
    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.phone.includes(searchQuery) ||
      contact.company?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.address?.city.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredContacts(filtered);
  }, [searchQuery, contacts]);

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  const getColorById = (id) => {
    const colors = ['#FF6F61', '#6C63FF', '#4CAF50', '#FFC107', '#FF9800'];
    return colors[id % colors.length];
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minHeight: '120vh', overflowY: 'auto' }}>

        <Header />

        <Box sx={{ textAlign: 'center', padding: '20px 20px 10px', marginTop: '20px' }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: theme.palette.primary.main, fontSize: '2.5rem' }}>
            Access Your Contacts Anytime, Anywhere
          </Typography>
          <Typography variant="body1" sx={{ color: 'textSecondary', marginTop: '10px', fontSize: '1rem' }}>
            Simplify your network management with an easy-to-use interface and seamless accessibility.
          </Typography>
        </Box>

        <Box sx={{ textAlign: 'center', margin: '20px auto' }}>
          <img
            src="/assets/contact.jpg"
            alt="Illustration"
            style={{
              width: '100%',
              maxWidth: '900px',
              maxHeight: '400px',
              borderRadius: '8px',
              objectFit: 'cover',
            }}
          />
        </Box>

        <Box sx={{ textAlign: 'center', margin: '10px 0 20px' }}>
          <Typography variant="body2" sx={{ color: theme.palette.primary.main, fontSize: '1rem' }}>
            👇 Scroll down to search and view your contacts 👇
          </Typography>
        </Box>

        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <Box
          sx={{
            flex: 1,
            padding: '30px',
            backgroundColor: '#FFFFFF',
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
            boxShadow: '0px -4px 8px rgba(0, 0, 0, 0.1)',
            overflowY: 'auto',
          }}
        >
          <Container>
            <ButtonGroup variant="outlined" color="primary" sx={{ mb: 4 }}>
              <Button
                onClick={() => handleViewModeChange('table')}
                variant={viewMode === 'table' ? 'contained' : 'outlined'}
              >
                Table View
              </Button>
              <Button
                onClick={() => handleViewModeChange('list')}
                variant={viewMode === 'list' ? 'contained' : 'outlined'}
              >
                List View
              </Button>
            </ButtonGroup>

            {loading && <CircularProgress />}
            {error && (
              <Typography variant="body1" color="error">
                {error}
              </Typography>
            )}

            {!loading && !error && filteredContacts.length > 0 && (
              <>
                {viewMode === 'table' ? (
                  <TableContainer component={Paper}>
                    <ContactsTable contacts={filteredContacts} />
                  </TableContainer>
                ) : (
                  <Grid container spacing={4}>
                    <ContactsList contacts={filteredContacts} getColorById={getColorById} />
                  </Grid>
                )}
              </>
            )}

            {!loading && !error && filteredContacts.length === 0 && (
              <Typography variant="h6" align="center" color="textSecondary">
                No contacts match your search.
              </Typography>
            )}
          </Container>
        </Box>

        {/* Footer */}
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default Contacts;
