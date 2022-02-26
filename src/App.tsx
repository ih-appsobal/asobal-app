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
import Club from './components/views/club/Club';
import Home from './components/views/home/Home';
import Navbar from './components/misc/Navbar/Navbar';


function App() {


  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="intro" element={<Intro />} />
            <Route path="club-selector" element={<ClubSelector />} />
            <Route path="club" element={<Club />} />
            <Route path="home" element={<Home />}/>
          </Routes>
          <Navbar/>
        </BrowserRouter>

      </div>
  );
}

export default App;
