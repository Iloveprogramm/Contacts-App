// src/components/SearchBar.jsx
import React from 'react';
import { Box, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <Box
      sx={{
        textAlign: 'center',
        margin: '0 auto 30px',
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Search contacts..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{
          width: '85%',
          maxWidth: '600px',
          backgroundColor: '#FFF',
          borderRadius: '8px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export default SearchBar;
