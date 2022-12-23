import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function NotLoggedInRoutes() {
  const store = useSelector((store) => store);
  const { user } = store.rootReducer;

  return user ? <Navigate to="/" /> : <Outlet />;
}
