import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import VersusCard from '../../misc/VersusCard/VersusCard';
import { Match } from './../matchDetails/utils';
import { getMatches } from '../../../services/MatchesService';
import CircularProgress from '@mui/material/CircularProgress';

import './Games.css';
import useTitle from '../../../hooks/useTitle';
import Ranking from '../../ranking/ranking';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const tabsStyles = {
  fontSize: 12
}

const Games = () => {
  useTitle('Partidos')
  const [matches, setMatches] = React.useState<Match[]>([]);
  const [topTabValue, setTopTabValue] = React.useState(0);
  const [bottomTabValue, setBottomTabValue] = React.useState(0);

  useEffect(() => {
    setMatches([]);
    getMatches(bottomTabValue + 1)
      .then((matchesList) => {
        setMatches(matchesList)
      })
  }, [bottomTabValue]);

  const handleTopTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTopTabValue(newValue);
  };

  const handleBotttomTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setBottomTabValue(newValue);
  };

  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={topTabValue}
          onChange={handleTopTabChange}
          aria-label="basic tabs example"
          variant="fullWidth"
        >
          <Tab label="Horarios" {...a11yProps(0)} />
          <Tab label="Clasificación" {...a11yProps(1)} />
        </Tabs>
      </Box>

      {
        topTabValue === 0 && (

        <><Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={bottomTabValue}
              onChange={handleBotttomTabChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab sx={tabsStyles} label="Jornada 1" />
              <Tab sx={tabsStyles} label="Jornada 2" />
              <Tab sx={tabsStyles} label="Jornada 3" />
              <Tab sx={tabsStyles} label="Jornada 4" />
              <Tab sx={tabsStyles} label="Jornada 5" />
              <Tab sx={tabsStyles} label="Jornada 6" />
              <Tab sx={tabsStyles} label="Jornada 7" />
            </Tabs>
          </Box><Box sx={{ marginY: 2, marginX: 1, paddingBottom: '40px' }}>
              {matches.length ?
                matches.map(match => (
                  <Link to={`/app/partidos/${match.id}`} key={match.id}>
                    <VersusCard match={match}></VersusCard>
                  </Link>
                )) :
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '35vh' }}>
                  <CircularProgress />
                </Box>}
            </Box></>
        )
      }

      {
        topTabValue === 1 && (
          <Ranking />
        )
      }
    </div>
  )
}

export default Games;