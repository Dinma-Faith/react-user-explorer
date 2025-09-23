import { Navigate } from "react-router-dom";

function ProtectRoute({ children }) {
  const isAuth = localStorage.getItem("auth");

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectRoute;
