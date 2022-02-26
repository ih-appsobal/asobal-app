import React from 'react';
import useTitle from '../../../hooks/useTitle';
import NotificationsTable from '../../notifications/NotificationsTable/NotificationsTable';
import './Notifications.css';

const Notifications = () => {
    useTitle('Notificaciones')
    
    const notifications = [
        {
            url: '/',
            message: 'Ya tenemos nueva web',
            read: false
        },
        {
            url: '/match',
            message: 'El partido va a comenzar',
            read: true
        },
        {
            url: '/results',
            message: 'Barcelona 0 - Segovia 3',
            read: false
        },
        {
            url: '/team',
            message: 'Nuevo fichaje de los leonéses',
            read: true
        },
        {
            url: '/team',
            message: 'Nuevo fichaje de los leonéses',
            read: false
        },
        {
            url: '/team',
            message: 'Nuevo fichaje de los leonéses',
            read: false
        },
    ]
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