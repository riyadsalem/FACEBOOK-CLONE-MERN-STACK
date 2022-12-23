import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Login from "../pages/login";

export default function LoggedInRoutes() {
  const store = useSelector((store) => store);
  const { user } = store.rootReducer;

  return user ? <Outlet /> : <Login />;
}
