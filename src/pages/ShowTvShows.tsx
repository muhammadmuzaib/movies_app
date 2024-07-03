import React from 'react';
import { Box, useTheme} from '@mui/material';
import SearchAppBar from '../components/SearchAppBar';


const ShowTvShows: React.FC = () => {
  const theme = useTheme();
  return (
    <Box style={{ background: theme.palette.background.default, color: theme.palette.text.primary }}>
      <SearchAppBar />
      <h1>Tv Show Screen</h1>
    </Box>
  );
};

export default ShowTvShows;
