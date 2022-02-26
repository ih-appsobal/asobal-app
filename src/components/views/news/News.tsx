import { Container, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { Post, list } from '../../../services/PostService';
import LoaderModal from '../../misc/LoaderModal/LoaderModal';
import MediaCard from '../../misc/PostCard/PostCard';
import PostRow from '../../misc/PostRow/PostRow';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import './News.css'

const News = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  const fetchPosts = async () => {
    try {
      const response = await list()
      setLoading(false)
      setPosts(response)
    } catch(err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div id="News">
      <Container>
        { loading || !posts.length ? <LoaderModal /> : (
          <div>
            <h1>Noticias</h1>
            <Grid sx={{ mb: "0.5rem" }} container spacing={1}>
              {
                posts.slice(0, 4).map(post => {
                  return post.visible && (
                    <Grid item xs={6}>
                      <MediaCard post={post}/>
                    </Grid>
                  )
                })
              }
            </Grid>
            <MediaCard post={posts[4]}/>
            <hr></hr>
            <div className="scrolling-wrapper-flexbox" >
              {
                posts.slice(5,9).map(post => {
                  return post.visible && (<PostRow post={post}/>)
                })
              }
            </div>
            <hr></hr>
            <div style={{ marginTop: '0.5rem'}}>
              {
                posts.slice(9,13).map(post => {
                  return post.visible && (<PostRow post={post}/>)
                })
              }
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default News;