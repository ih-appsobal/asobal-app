import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import './VersusCard.css';

const VersusCard = (props: any) => {
  const { local, foreign, status, date } = props.match;

  const parseDate = (date: string) => {
    const dateFormat = new Date(date);
    let hours = dateFormat.getHours();
    let minutes = dateFormat.getMinutes();
    
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  }

  return (
    <Box sx={{ minWidth: 275, marginBottom: 2 }}>
      <Card variant="outlined">
        <div className='VersusCard-content'>
          <div className='VersusCard-team'>
            <img src={local.club.logo} alt={local.club.club} />
            <span>{local.club.name}</span>
          </div>
          { status === 'No comenzado' ?
              <span className='VersusCard-date'>{parseDate(date)}</span>
            :
              <div className="match-result">
                <span className="goals-display">{local.goals.length}</span>
                <span className="match-status">{status.toUpperCase()}</span>
                <span className="goals-display">{foreign.goals.length}</span>
              </div>
          }
          <div className='VersusCard-team'>
            <img src={foreign.club.logo} alt={foreign.club.name} />
            <span>{foreign.club.name}</span>
          </div>
        </div>  
      </Card>
    </Box>
  );
};

export default VersusCard;