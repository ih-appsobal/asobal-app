import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/AuthProvider";

export default function RequireAuth({ children }: { children: JSX.Element }) {
  const { isFetching, user } = useContext(UserContext);

  if (isFetching) return null
  
  if (!isFetching && user) {
    
    return children
  }

  return <Navigate to="/iniciar-sesion" />
}