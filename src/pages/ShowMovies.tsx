import React from 'react';
import {Box, useTheme} from '@mui/material';
import SearchAppBar from '../components/SearchAppBar';

const ShowMovies: React.FC = () => {
  const theme = useTheme();
  return (
    <Box style={{ background: theme.palette.background.default, color: theme.palette.text.primary }}>
      <SearchAppBar />
      <h1>Movies Screen</h1>
    </Box>
  );
};

export default ShowMovies;
