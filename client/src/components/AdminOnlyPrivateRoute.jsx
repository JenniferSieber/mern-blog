import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function AdminOnlyPrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser && currentUser.isAdmin ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" />
  );
}