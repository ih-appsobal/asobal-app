import {  Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Post } from '../../../services/PostService';
import './PostRow.css'

function PostRow({ post, small } : { post: Post, small?: boolean }) {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/app/noticias/${post?.id}`)
  }

  return (
    <div onClick={handleNavigate} className={`PostRow ${small ? 'small' : ''}`} style={{ display: "inline-block" }}>
      <Card>
        <div className="card-content">
          <div className="card-img" style={{ backgroundImage: `url(${post.media})`}}>
          </div>
          <CardContent sx={{ backgroundColor: '#121212 !important'}} >
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
