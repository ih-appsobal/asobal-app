import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Post } from '../../../services/PostService';
import './PostCard.css'


export default function MediaCard({ post }: { post: Post }) {
  return (
    <Card sx={{ maxWidth: 345, mb: "0.5rem" }}>
      <CardMedia
        component="img"
        height="100"
        image={post.media}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography className="PostCard-description" variant="body2" color="text.secondary">
          {post.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="secondary" size="small">Share</Button>
        <Button color="secondary" size="small">Lee</Button>
      </CardActions>
    </Card>
  );
}
