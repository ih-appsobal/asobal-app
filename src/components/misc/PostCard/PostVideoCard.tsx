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

export default function PostVideoCard({ post }: { post: Post }) {
  return (
    <Card sx={{ maxWidth: 345, mt: '1rem', mb: '0 ' }}>
      <CardMedia
        component="iframe"
        height="200"
        image={"https://www.youtube.com/embed/ZbpBIrnwAck"}
      />
      <CardContent sx={{ pb: '5px', backgroundColor: '#121212 !important' }} >
        <Typography className="PostCard-title" gutterBottom variant="body1" component="div">
          {post.title}
        </Typography>
        <Typography className="PostCard-description" variant="body2" color="text.secondary">
          {post.content}
        </Typography>
      </CardContent>
      <CardActions  sx={{ backgroundColor: '#121212 !important'}}>
        <Button color="primary" size="small">Comparte <ShareIcon sx={{ ml: '0.25rem', fontSize: '12px', mt: '0px'}}/></Button>
      </CardActions>
    </Card>
  );
}
