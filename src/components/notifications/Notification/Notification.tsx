import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Link, useNavigate } from 'react-router-dom';
import NotificationPoint from '../NotificationPoint/NotificationPoint';
import FromImg from '../../../assets/img/notification-from.jpg'
import { formatDate } from '../../helpers/utilities';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './Notification.css';
import { TrendingUpOutlined } from '@mui/icons-material';
import { deleteId, edit } from '../../../services/NotificationService';
export interface NotificationProps {
    post: string,
    read: boolean,
    id: string,
    message: string,
    position?: number
};

const Notification = ({ post, id, read, message, position }: NotificationProps) => {
    const [deleting, setDeleting] = useState(false)
    const [isRead, setIsRead] = useState(read)
    let navigate = useNavigate();

    const handleRedirectPost = async () => {
        try {
            await edit(id)
            setIsRead(true)
            navigate(`/app/noticias/${post}`)
        } catch(err) {
            console.error(err);
        }
    };

    const handleRead = async () => {
        try {
          await edit(id)
          setIsRead(true)
        } catch(err) {
          console.error(err);
        }
    };

    const handleDelete = async () => {
        try {
            await deleteId(id)
            setDeleting(true)
          } catch(err) {
            console.error(err);
          }
    }

    const classCalculate =() => {
        if (position === 0 || (position && position % 2 == 0)) {
            return 'bg-primary';
        } else {
            return 'bg-secondary';
        };
    };

    const backgroundNotification = classCalculate();

  return (
    <div className={`Notification ${backgroundNotification} ${deleting ? 'fade-to-red' : ''}`}>
        <List
        className={`${deleting ? 'fade-out-left' : ''}`}
        sx={{
            width: '100vw',
            maxWidth: 360,
            }}
        >
            <ListItem alignItems="center">
            <ListItemAvatar>
                {!isRead && (
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
                <div onClick={handleRedirectPost} className='Notification-message'>
                    <p>{message}</p>
                    <small>{formatDate(new Date())}</small>
                </div>
            </ListItem>
            <div className="notification-actions">
                <RemoveRedEyeIcon
                    onClick={handleRead}
                    className={`${isRead ? 'eye-disabled' : ''}`}
                />
                <DeleteOutlineIcon
                    onClick={handleDelete}
                    className=""
                />
            </div>
        </List>
    </div>
  )
}

export default Notification;