import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getMatch } from '../../../services/MatchesService';
import { Match, prepareData, ResponseData} from './utils'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import './MatchDetails.css';
import useTitle from '../../../hooks/useTitle';
import Stories from './Stories/Stories';
import { formatDate } from '../../helpers/utilities';

const getCardColor = (colorCase: string) => {
  const colors = {
    Amarilla: 'yellow',
    Roja: 'red',
    Azul: 'blue'
  }

  // @ts-ignore: Unreachable code error
  return colors[colorCase];
}

const MatchDetails = () => {
  useTitle('Partidos')
  const { id } = useParams<{id: string}>();
  const [match, setMatch] = useState<Match>();
  const [timeline, setTimeline] = useState<ResponseData[]>();

  useEffect(() => {
    if (id) {
      getMatch(id as string)
        .then((match) => setMatch(match))
    }
  }, [id]);

  useEffect(() => {
    if (match) {
      console.log(match)
      setTimeline(prepareData(match))
    }
  }, [match]);

  return match ? (
    <div style={{marginBottom: '55px'}}>
      <div className='MatchDetails-content'>
        <div className='MatchDetails-team'>
          <img className='MatchDetails-img' src={match.local.club.logo} alt={match.local.club.name} />
          <span className='MatchDetails-span'>{match.local.club.name}</span>
        </div>
        { match.status === 'No comenzado' ?
            <span className='MatchDetails-date'>{formatDate(match.date)}</span>
          :
            <div className="match-result">
              <span className="goals-display">{match.local.goals.length}</span>
              <span className="match-status">{match.status.toUpperCase()}</span>
              <span className="goals-display">{match.foreign.goals.length}</span>
            </div>
        }
        <div className='MatchDetails-team'>
          <img className='MatchDetails-img' src={match.foreign.club.logo} alt={match.foreign.club.name} />
          <span className='MatchDetails-span'>{match.foreign.club.name}</span>
        </div>
      </div>

      <div className='MatchDetails-timeline'>
        {timeline?.map((matchEvent, index) => (
          <div className='MatchDetails-event' key={index}>
            {matchEvent.team === 'local' ? <span className='MatchDetails-case'>
                {matchEvent.color && <span className='MatchDetails-color' style={{backgroundColor: getCardColor(matchEvent.color)}}>&nbsp;</span>}
                {matchEvent.type === 'foul' && <span>Exclusión</span>}
                {matchEvent.type === 'goal' && <SportsSoccerIcon></SportsSoccerIcon>}
              </span> : <span></span>}
            <span className='MatchDetails-minute'>{matchEvent.minute}'</span>
            {matchEvent.team === 'foreign' ? <span className='MatchDetails-case'>
              {matchEvent.color && <span className='MatchDetails-color' style={{backgroundColor: getCardColor(matchEvent.color)}}>&nbsp;</span>}
              {matchEvent.type === 'foul' && <span>Exclusión</span>}
              {matchEvent.type === 'goal' && <SportsSoccerIcon></SportsSoccerIcon>}
            </span> : <span></span>}
          </div>
        ))}
      </div>

      <Stories stories={match.stories} />
    </div>
  ) : (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50vh' }}>
      <CircularProgress />
    </Box>
  )
}

export default MatchDetails;