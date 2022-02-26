import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Post } from '../../../services/PostService';
import ShareIcon from '@mui/icons-material/Share';
import './PostCard.css'

export default function MediaCard({ post }: { post: Post }) {
  return (
    <Card sx={{ maxWidth: 345, mt: '1rem', mb: '0 ' }}>
      <CardMedia
        component="img"
        height="200"
        image={post.media}
        alt="asobal img"
      />
      <CardContent sx={{ pb: '5px'}} >
        <Typography className="PostCard-title" gutterBottom variant="body1" component="div">
          {post.title}
        </Typography>
        <Typography className="PostCard-description" variant="body2" color="text.secondary">
          {post.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" size="small">Comparte <ShareIcon sx={{ ml: '0.25rem', fontSize: '12px', mt: '0px'}}/></Button>
      </CardActions>
    </Card>
  );
}
