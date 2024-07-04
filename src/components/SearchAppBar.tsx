import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Drawer, List, ListItem, ListItemText, Paper, ClickAwayListener } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Search, SearchIconWrapper, StyledInputBase } from '../styles/searchAppBarStyles';
import { videos, Video } from '../videosData';

const SearchAppBar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [filteredVideos, setFilteredVideos] = useState<Video[]>([]);
  const navigate = useNavigate();

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setSearchInput(input);
    if (input) {
      const filtered = videos.filter(video => video.description.toLowerCase().includes(input.toLowerCase()));
      setFilteredVideos(filtered);
    } else {
      setFilteredVideos([]);
    }
  };

  const handleClickAway = () => {
    setFilteredVideos([]);
  };

  const handleVideoClick = (videoId: string) => {
    navigate(`/video/${videoId}`);
    setFilteredVideos([]);
    setSearchInput('');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            SFlix
          </Typography>
          <Box sx={{ position: 'relative' }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={searchInput}
                onChange={handleSearchChange}
              />
            </Search>
            {filteredVideos.length > 0 && (
              <ClickAwayListener onClickAway={handleClickAway}>
                <Paper sx={{ position: 'absolute', top: '40px', left: 0, right: 0, zIndex: 10 }}>
                  <List>
                    {filteredVideos.map(video => (
                      <ListItem key={video.url} button onClick={() => handleVideoClick(video.url.split('v=')[1])}>
                        <ListItemText primary={video.description} />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </ClickAwayListener>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem component={Link} to="/movies">
              <ListItemText primary="Movies" />
            </ListItem>
            <ListItem component={Link} to="/tvshows">
              <ListItemText primary="TV Shows" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default SearchAppBar;
