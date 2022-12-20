import { Routes, Route } from "react-router-dom";
import LearnSomeIdeas from "./LearnSomeIdeas";
import { Login, Home, Profile } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} exact />
        <Route path="/profile" element={<Profile />} exact />
        <Route path="/" element={<Home />} exact />
        <Route path="/LearnSomeIdeas" element={<LearnSomeIdeas />} exact />
      </Routes>
    </>
  );
};

export default App;
