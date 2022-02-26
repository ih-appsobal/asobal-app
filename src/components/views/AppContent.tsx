import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/AuthProvider";
import Navbar from "../misc/Navbar/Navbar";

export default function AppContent() {
  let location = useLocation();

  const { user } = useContext(UserContext);

  if (!user?.club && location.pathname !== "/selecciona-equipo") {
    return <Navigate to="/selecciona-equipo" />
  }

  return (
    <div className="AppContent">
      <Outlet />
      <Navbar />
    </div>
  )
}