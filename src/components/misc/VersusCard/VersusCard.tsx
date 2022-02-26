import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import './VersusCard.css';

const VersusCard = (props: any) => {
  const { local, foreign, status, date } = props.match;

  return (
    <Box sx={{ minWidth: 275, marginBottom: 2 }}>
      <Card variant="outlined">
        <div className='VersusCard-content'>
          <div>
            <img src={local.logo} alt={local.club} />
            <span>{local.club}</span>
          </div>
          { status === 'No comenzado' ?
              <span>{date}</span>
            :
              <div className="match-result">
                <span className="goals-display">{local.goals.length}</span>
                <span className="match-status">{status.toUpperCase()}</span>
                <span className="goals-display">{foreign.goals.length}</span>
              </div>
          }
          <div>
            <img src={foreign.logo} alt={foreign.club} />
            <span>{foreign.club}</span>
          </div>
        </div>  
      </Card>
    </Box>
  );
};

export default VersusCard;