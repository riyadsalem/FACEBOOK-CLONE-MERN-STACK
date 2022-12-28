import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import CreatePostPopup from "./components/createPostPopup";
// import LearnSomeIdeas from "./LearnSomeIdeas";
import { Login, Home, Profile, Reset } from "./pages";
import Activate from "./pages/home/activate";
import { LoggedInRoutes, NotLoggedInRoutes } from "./routes";

const App = () => {
  const { user } = useSelector((store) => ({ ...store.rootReducer }));
  return (
    <>
      <CreatePostPopup user={user} />
      <Routes>
        <Route element={<LoggedInRoutes />}>
          <Route path="/profile" element={<Profile />} exact />
          <Route path="/" element={<Home />} exact />
          <Route path="/activate/:token" element={<Activate />} exact />
        </Route>
        <Route element={<NotLoggedInRoutes />}>
          <Route path="/login" element={<Login />} exact />
        </Route>
        <Route path="/reset" element={<Reset />} exact />
        {/** <Route path="/LearnSomeIdeas" element={<LearnSomeIdeas />} exact /> */}
      </Routes>
    </>
  );
};

export default App;
