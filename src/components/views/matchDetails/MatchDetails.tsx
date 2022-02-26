import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getMatch } from '../../../services/MatchesService';
import { MATCHES } from '../../../constants/data';
import { Match, prepareData, ResponseData} from './utils'

import './MatchDetails.css';

const MatchDetails = () => {
  const { id } = useParams<{id: string}>();
  const [match, setMatch] = useState<Match>();
  const [timeline, setTimeline] = useState<ResponseData[]>();

  const { local, foreign, status, date } = MATCHES[2];

  useEffect(() => {
    if (id) {
      getMatch(id as string)
        .then((match) => setMatch(match))
    }
  }, [id]);

  useEffect(() => {
    if (match) {
      setTimeline(prepareData(match))
    }
  }, [match])
  return (
    <div>
      <div className='MatchDetails-content'>
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
    </div>
  )
}

export default MatchDetails;