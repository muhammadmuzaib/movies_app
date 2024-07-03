import React from 'react';
import { useParams } from 'react-router-dom';
import { CssBaseline, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

const VideoPlayer: React.FC = () => {
  const { videoId } = useParams<{ videoId: string }>();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ padding: '20px' }}>
        <Typography variant="h4">Video Player</Typography>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </ThemeProvider>
  );
};

export default VideoPlayer;
