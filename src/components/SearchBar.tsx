import React from 'react';
import { TextField, Box } from '@mui/material';

const SearchBar: React.FC = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <TextField
        fullWidth
        variant="filled"
        placeholder="Search for movies or TV shows..."
        sx={{
          backgroundColor: 'white',
          '& .MuiFilledInput-root': {
            color: 'black',
            '&::before, &::after': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'black',
          },
        }}
      />
    </Box>
  );
};

export default SearchBar;
