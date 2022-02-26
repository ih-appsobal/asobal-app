import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from './components/views/login/Login';
import Register from './components/views/register/Register';
import Intro from './components/views/intro/Intro';
import ClubSelector from './components/views/clubSelector/ClubSelector';
import Club from './components/views/club/Club';
import Games from './components/views/games/Games';
import News from './components/views/news/News';
import MatchDetails from './components/views/matchDetails/MatchDetails';
import Notifications from './components/views/notifications/Notifications';
import RequireAuth from "./components/guards/RequireAuth";
import AppContent from "./components/views/AppContent";
import PostDetail from "./components/misc/PostDetail/PostDetail";
import ScrollToTop from "./ScrollToTop";

function App() {

  return (
      <div className="App">
        <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="iniciar-sesion" element={<Login />} />
            <Route path="registro" element={<Register />} />
            <Route path="intro" element={<Intro />} />
            <Route path="selecciona-equipo" element={<RequireAuth><ClubSelector /></RequireAuth>} />
            <Route path="app" element={<RequireAuth><AppContent/></RequireAuth>}>
              <Route index element={<News />}/>
              <Route path="noticias/:id" element={<PostDetail />} />
              <Route path="equipo" element={<Club />} />
              <Route path="partidos" element={<Games />}/>
              <Route path="partidos/:id" element={<MatchDetails />}/>
              <Route path="notificaciones" element={<Notifications />} />
            </Route>
            <Route path="*" element={<Navigate to="/app" />} />
          </Routes>
          </ScrollToTop>
        </BrowserRouter>
      </div>
  );
}

export default App;
