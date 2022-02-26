import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import './VersusCard.css';

const VersusCard = (props: any) => {
  const { local, foreign, status, date, result } = props.match;

  return (
    <Box sx={{ minWidth: 275, marginBottom: 2 }}>
      <Card variant="outlined">
        <div className='VersusCard-content'>
          <div>
            <img src={local.logo} alt={local.name} />
            <span>{local.name}</span>
          </div>
          { status === 'No comenzado' ?
              <span>{date}</span>
            :
              <div className="match-result">
                <span className="goals-display">{local.goals}</span>
                <span className="match-status">{status.toUpperCase()}</span>
                <span className="goals-display">{foreign.goals}</span>
              </div>
          }
          <div>
            <img src={foreign.logo} alt={foreign.name} />
            <span>{foreign.name}</span>
          </div>
        </div>  
      </Card>
    </Box>
  );
};

export default VersusCard;