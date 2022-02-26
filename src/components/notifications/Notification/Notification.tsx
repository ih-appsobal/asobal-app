import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './Notification.css';
import NotificationPoint from '../NotificationPoint/NotificationPoint';

export interface NotificationProps {
    url: string,
    read: boolean,
    message: string,
    position?: number,
};

const Notification = ({ url, read, message, position }: NotificationProps) => {

    console.log('positions =>', position === 0, position)

    const classCalculate =() => {
        
        if(position === 0 || (position && position % 2 == 0)) {
            return 'bg-primary';
        } else {
            return 'bg-secondary';
        };

    };

    const backgroundNotification = classCalculate();

  return (
      <div className={`Notification ${backgroundNotification}`}>
        <Link to={url}>
            <List sx={{ 
                width: '100vw', 
                maxWidth: 360,
                }}>
                <ListItem alignItems="center">
                <ListItemAvatar>
                    {read && (
                        <NotificationPoint />
                    )}
                    <Avatar
                        sx={{
                            width: '4rem',
                            height: '4rem',
                        }}
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg" 
                    />
                </ListItemAvatar>
                   <div className='Notification-message'>
                       <p>{message}</p>
                   </div>
                </ListItem>
            </List>
        </Link>
    </div>
  )
}

export default Notification;