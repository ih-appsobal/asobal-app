import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import useTitle from '../../../hooks/useTitle';
import { getById, Post } from '../../../services/PostService';
import LoaderModal from '../LoaderModal/LoaderModal';
import './PostDetail.css'

const PostDetail = () => {
  const { id } = useParams<{id: string}>();
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(false)
  useTitle('Detalle de noticia')
  const fetchDetail= async () => {
    if (id) {
      try {
          const response = await getById(id as string)
          setLoading(false)
          setPost(response)
      } catch (err) {
          console.error(err);
      }
    }
  };

  useEffect(() => {
    fetchDetail()
  }, [])

  if (loading) return (
    <LoaderModal/>
  )

  return (
    <div id="PostDetail">
      <div className="img-bg" style={{ backgroundImage: `url(${post?.media})` }}>
        <div className="img-bg-overlay">
        </div>
      </div>
      <Container>
      <h1 className="title">{post?.title}</h1>
      <div className='news-divider'></div>
      <p>{
          post
            ?  post?.content.split(".").map((place, i ) => <p key={i}> {place} </p>)
            : ""
        }
      </p>
      </Container>
    </div>
  );
};

export default PostDetail;