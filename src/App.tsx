import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/views/login/Login';
import Register from './components/views/register/Register';
import Intro from './components/views/intro/Intro';
import ClubSelector from './components/views/clubSelector/ClubSelector';


function App() {
  return (
      <div className="App">
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />}/>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="intro" element={<Intro />} />
              <Route path="club-selector" element={<ClubSelector />} />
            </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
