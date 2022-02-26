import { Container, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { Post, list } from '../../../services/PostService';
import LoaderModal from '../../misc/LoaderModal/LoaderModal';
import MediaCard from '../../misc/PostCard/PostCard';
import PostRow from '../../misc/PostRow/PostRow';
import './News.css'
import useTitle from '../../../hooks/useTitle';
import PostVideoCard from '../../misc/PostCard/PostVideoCard';

const News = () => {
  useTitle('Noticias')
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
            <h1 className="mb-0">Últimas noticias</h1>
            <div className='news-divider'></div>
            <div className="scrolling-wrapper-flexbox" >
              {
                posts.slice(5,9).map((post, i) => {
                  return post.visible && (<PostRow key={i} small post={post}/>)
                })
              }
            </div>
            <MediaCard post={posts[4]}/>
            <PostVideoCard post={posts[5]}/>
            <h1 className="mb-0">Para tí</h1>
            <div className='news-divider'></div>
            <div className="scrolling-wrapper-flexbox" >
              {
                posts.slice(5,9).map((post, i) => {
                  return post.visible && (<PostRow key={i} small post={post}/>)
                })
              }
            </div>
            <h1 className="mb-0">Internacional</h1>
            <div className='news-divider'></div>
            <div style={{ marginTop: '0.5rem'}}>
              {
                posts.slice(7,13).map((post, i) => {
                  return post.visible && (
                    <div key={i} style={{ marginTop: '0.5rem'}}>
                       <PostRow post={post}/>
                    </div>
                  )
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