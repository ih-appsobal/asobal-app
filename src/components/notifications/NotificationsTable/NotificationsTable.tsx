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
                    post={notification.post}
                    message={notification.message}
                    read={notification.read}
                    id={notification.id}
                    key={i}
                    position={i}
                />
            )

        })}
    </div>
  )
}

export default NotificationsTable;