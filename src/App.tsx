import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import MainComponent from './pages/MainComponent';
import VideoPlayer from './pages/VideoPlayer';
import ShowMovies from './pages/ShowMovies';
import ShowTvShows from './pages/ShowTvShows';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<MainComponent />} />
          <Route path="/video/:videoId" element={<VideoPlayer />} />
          <Route path="/movies" element={<ShowMovies />} />
          <Route path="/tvshows" element={<ShowTvShows />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
