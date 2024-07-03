import React from 'react';
import { Typography, useTheme, Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import SearchAppBar from '../components/SearchAppBar';
import VideoCard from '../components/VideoCard';
import { Video } from '../components/Video';

const MainComponent: React.FC = () => {
  const theme = useTheme();
  const videos: Video[] = [
    {
      url: "https://www.youtube.com/watch?v=0aGm_9Qf3j8",
      description: "First Video Description",
      rating: 9,
      playtime: "12:34"
    },
    {
      url: "https://www.youtube.com/watch?v=n9d9xuVs3ws",
      description: "Second Video Description",
      rating: 8,
      playtime: "45:67"
    }
  ];

  return (
    <Box style={{ background: theme.palette.background.default, color: theme.palette.text.primary }}>
      <SearchAppBar />
      <Box sx={{ padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Video Gallery
        </Typography>
        <Grid container spacing={2}>
          {videos.map(video => (
            <Grid xs={12} sm={6} md={4} key={video.url}>
              <VideoCard video={video} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MainComponent;
