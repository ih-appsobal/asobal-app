import React from 'react';
import Notification, { NotificationProps } from '../Notification/Notification';
import './NotificationsTable.css';

interface NotificationsProp {
    notifications: Array<NotificationProps>
}

const NotificationsTable = ({ notifications }: NotificationsProp) => {

  return (
    <div className='NotificationsTable'>
        {notifications.map((notification: any, i) => {
            return (
                <Notification
                    url={notification.url}
                    message={notification.message}
                    read={notification.read}
                    key={i}
                    position={i}
                />
            )
            
        })}
    </div>
  )
}

export default NotificationsTable;