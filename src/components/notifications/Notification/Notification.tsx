import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import NotificationPoint from '../NotificationPoint/NotificationPoint';
import FromImg from '../../../assets/img/notification-from.jpg'
import { formatDate } from '../../helpers/utilities';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './Notification.css';

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
                    {!read && (
                        <NotificationPoint />
                    )}
                    <Avatar
                        sx={{
                            width: '4rem',
                            height: '4rem',
                        }}
                        alt="Remy Sharp"
                        src={FromImg}
                    />
                </ListItemAvatar>
                   <div className='Notification-message'>
                       <p>{message}</p>
                       <small>{formatDate(new Date())}</small>
                   </div>
                </ListItem>
                <div className="notification-actions">
                    <RemoveRedEyeIcon
                        // onClick={() => patch a read}
                        className={`${read ? 'eye-disabled' : ''}`}
                    />
                    <DeleteOutlineIcon className=""/>
                </div>
            </List>
        </Link>
    </div>
  )
}

export default Notification;