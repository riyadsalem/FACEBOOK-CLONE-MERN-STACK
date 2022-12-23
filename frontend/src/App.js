import { Routes, Route } from "react-router-dom";
// import LearnSomeIdeas from "./LearnSomeIdeas";
import { Login, Home, Profile } from "./pages";
import { LoggedInRoutes, NotLoggedInRoutes } from "./routes";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<LoggedInRoutes />}>
          <Route path="/profile" element={<Profile />} exact />
          <Route path="/" element={<Home />} exact />
        </Route>
        <Route element={<NotLoggedInRoutes />}>
          <Route path="/login" element={<Login />} exact />
        </Route>
        {/** <Route path="/LearnSomeIdeas" element={<LearnSomeIdeas />} exact /> */}
      </Routes>
    </>
  );
};

export default App;
