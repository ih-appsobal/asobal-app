import { Container, Grid } from '@mui/material';
import MediaCard from '../../misc/PostCard/PostCard';
import PostRow from '../../misc/PostRow/PostRow';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import './News.css'

const News = () => {
  return (
    <div id="News">
      <Container>
        <h1>Noticias</h1>
        <Grid sx={{ mb: "0.5rem" }} container spacing={1}>
          <Grid item xs={6}>
            <MediaCard/>
          </Grid>
          <Grid item xs={6}>
            <MediaCard/>
          </Grid>
          <Grid item xs={6}>
            <MediaCard/>
          </Grid>
          <Grid item xs={6}>
            <MediaCard/>
          </Grid>
        </Grid>
        <MediaCard />
        <hr></hr>
        <div className="scrolling-wrapper-flexbox" >
          <PostRow/>
          <PostRow/>
          <PostRow/>
        </div>
        <hr></hr>
        <div style={{ marginTop: '0.5rem'}}>
          <PostRow/>
          <PostRow/>
          <PostRow/>
        </div>
      </Container>
    </div>
  );
};

export default News;