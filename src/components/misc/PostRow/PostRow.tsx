import React from "react";
import PropTypes from "prop-types";
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Post } from '../../../services/PostService';
import './PostRow.css'


function PostRow({ post }: { post: Post }) {
  return (
    <div className="PostRow" style={{ display: "inline-block" }}>
      <Card>
        <div className="card-content">
          <div className="card-img" style={{ backgroundImage: `url(${post.media})`}}>
          </div>
          <CardContent>
            <Typography sx={{ mb: '0.15rem' }} color="textSecondary">
              {post.title}
            </Typography>
            <small>
              {post.content}
            </small>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

export default PostRow;
