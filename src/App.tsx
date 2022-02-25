import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/views/login/Login';
import Register from './components/views/register/Register';
import Intro from './components/views/intro/Intro';
import ClubSelector from './components/views/clubSelector/ClubSelector';
import Home from './components/views/home/Home';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';


function App() {
  const [value, setValue] = useState(0);

  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}/>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="intro" element={<Intro />} />
            <Route path="club-selector" element={<ClubSelector />} />
            <Route path="home" element={<Home />}/>
          </Routes>
        </BrowserRouter>
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Recents" icon={<AccessAlarmIcon />} />
            <BottomNavigationAction label="Favorites" icon={<AccessAlarmIcon />} />
            <BottomNavigationAction label="Nearby" icon={<AccessAlarmIcon />} />
          </BottomNavigation>
      </div>
  );
}

export default App;
