import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/AuthProvider";
import Navbar from "../misc/Navbar/Navbar";
import TopNavbar from "../misc/TopNavbar/TopNavbar";

export default function AppContent() {
  let location = useLocation();

  const { user } = useContext(UserContext);

  if (!user?.club && location.pathname !== "/selecciona-equipo") {
    return <Navigate to="/selecciona-equipo" />
  }

  return (
    <div className="AppContent" style={{ marginTop: '56px' }}>
      <TopNavbar />
      <Outlet />
      <Navbar />
    </div>
  )
}