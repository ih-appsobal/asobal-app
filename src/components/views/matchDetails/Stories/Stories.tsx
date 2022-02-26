import { Typography } from '@mui/material';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './Stories.css';

export interface Story {
  image: string
  user: string
  match: string
  text: string
  id: string
}

const Stories = ({ stories }: { stories: Story[] }) => {
  const [opened, setOpened] = useState<number | null>()

  const onClick = (index: number) => {
    if (opened !== index) {
      setOpened(index)
    }
  }

  return (
    <div className="Stories">
      <Typography variant="h4" sx={{ textAlign: 'left', marginBottom: '1rem' }}>
        Stories
      </Typography>
      <div className='Stories-container'>
        {stories.map((story, i) => (
          <div onClick={() => onClick(i)} className={`Stories-story ${opened === i ? 'opened' : ''}`} key={story.id}>
            <img src={story.image} />
          </div>
        ))}
      </div>
      {opened !== null && opened !== undefined && (
        <StoryOpen story={stories[opened]} close={() => setOpened(null)} />
      )}
    </div>
  )
}

const StoryOpen = ({ story, close }: { story: Story, close: () => void }) => (
  <div className='StoryOpen' style={{ backgroundImage: `url(${story.image})` }}>
    <div className='StoryOpen-overlay'></div>
    <div onClick={close} style={{cursor: 'pointer'}}>
      <CloseIcon />
    </div>
    <div className='StoryOpen-text'>{story.text}</div>
  </div>
)

export default Stories