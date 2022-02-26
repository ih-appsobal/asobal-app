import React, { useEffect, useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import { list, Notification } from '../../../services/NotificationService';
import NotificationsTable from '../../notifications/NotificationsTable/NotificationsTable';
import './Notifications.css';

const Notifications = () => {
    useTitle('Notificaciones')

    const [notifications, setNotifications] = useState<Notification[]>([])
    const [loading, setLoading] = useState(false)

    const fetchNotifications = async () => {
        try {
            const response = await list()
            setLoading(false)
            setNotifications(response)
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchNotifications()
    }, [])

    return (
        <div className='Notifications'>
            <div className='Notifications-header'>
                <div className='Notifications-title'>
                    <h1>Tus avisos</h1>
                </div>
            </div>
            <NotificationsTable notifications={notifications} />
        </div>
    )
}

export default Notifications;