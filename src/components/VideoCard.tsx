import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Video } from './Video';

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    const videoId = new URL(video.url).searchParams.get('v');
    navigate(`/video/${videoId}`);
  };

  return (
    <Card onClick={handleCardClick} style={{ cursor: 'pointer', margin: '10px', maxWidth: '300px', maxHeight: "300px"}}>
      <CardMedia
        component="img"
        height="140"
        image={`https://img.youtube.com/vi/${new URL(video.url).searchParams.get('v')}/0.jpg`}
        alt={video.description}
      />
      <CardContent>
        <Typography variant="h6">{video.description}</Typography>
        <Typography variant="body2" color="textSecondary">Rating: {video.rating} / 10</Typography>
        <Typography variant="body2" color="textSecondary">Playtime: {video.playtime}</Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
