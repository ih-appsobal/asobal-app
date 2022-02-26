import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import VersusCard from '../../misc/VersusCard/VersusCard';

import './Games.css';

const match1 = {
  status: 'No comenzado',
  local: {
    logo: 'https://res.cloudinary.com/dwta0wgpp/image/upload/v1645824762/asobal/1.svg',
    name: 'TEAM 1',
    goals: 2
  },
  foreign: {
    logo: 'https://res.cloudinary.com/dwta0wgpp/image/upload/v1645824762/asobal/2.svg',
    name: 'TEAM 2',
    goals: 1
  },
  date: '14:00',
  result: '1'
}

const match2 = {
  status: 'Terminado',
  local: {
    logo: 'https://res.cloudinary.com/dwta0wgpp/image/upload/v1645824762/asobal/3.svg',
    name: 'TEAM 3',
    goals: 0
  },
  foreign: {
    logo: 'https://res.cloudinary.com/dwta0wgpp/image/upload/v1645824762/asobal/4.svg',
    name: 'TEAM 4',
    goals: 0
  },
  date: '14:00',
  result: 'X'
}

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
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="fullWidth">
          <Tab label="Horarios" {...a11yProps(0)} />
          <Tab label="Clasificación" {...a11yProps(1)} />
          <Tab label="Rankings" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
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
      </Box>

      <Box sx={{ marginY: 2, marginX: 1 }}>
        <VersusCard match={match1}></VersusCard>
        <VersusCard match={match2}></VersusCard>
      </Box>
    </div>
  )
}

export default Games;