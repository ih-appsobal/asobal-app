import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './PostCard.css'

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345, mb: "0.5rem" }}>
      <CardMedia
        component="img"
        height="100"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography className="PostCard-description" variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="secondary" size="small">Share</Button>
        <Button color="secondary" size="small">Lee</Button>
      </CardActions>
    </Card>
  );
}
