import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const user = localStorage.getItem("user");
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  if (!user) {
    return <Navigate to="/register" replace />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

