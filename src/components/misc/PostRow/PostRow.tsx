import {  Card, CardContent, Typography } from "@mui/material";
import { Post } from '../../../services/PostService';
import './PostRow.css'

function PostRow({ post, small } : { post: Post, small?: boolean }) {
  return (
    <div className={`PostRow ${small ? 'small' : ''}`} style={{ display: "inline-block" }}>
      <Card>
        <div className="card-content">
          <div className="card-img" style={{ backgroundImage: `url(${post.media})`}}>
          </div>
          <CardContent>
            <Typography className="PostRow-title" sx={{ mb: '0.15rem' }} color="textSecondary">
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
