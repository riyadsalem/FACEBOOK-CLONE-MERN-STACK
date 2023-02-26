import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import CreatePostPopup from "./components/createPostPopup";
// import LearnSomeIdeas from "./LearnSomeIdeas";
import { Login, Home, Profile, Reset } from "./pages";
import Activate from "./pages/home/activate";
import { LoggedInRoutes, NotLoggedInRoutes } from "./routes";
import { postsReducer } from "./functions/reducers";
import Friends from "./pages/friends";

const App = () => {
  const { user } = useSelector((store) => ({ ...store.rootReducer }));
  const [visible, setVisible] = useState(false);

  const [{ loading, error, posts }, dispatch] = useReducer(postsReducer, {
    loading: false,
    posts: [],
    error: "",
  });
  useEffect(() => {
    getAllPosts();
  }, []);
  const getAllPosts = async () => {
    try {
      dispatch({
        type: "POSTS_REQUEST",
      });
      const { data } = await axios.get(`http://localhost:8000/getAllPosts`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      dispatch({
        type: "POSTS_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "POSTS_ERROR",
        payload: error.response.data.message,
      });
    }
  };

  return (
    <>
      {visible && (
        <CreatePostPopup
          user={user}
          setVisible={setVisible}
          posts={posts}
          dispatch={dispatch}
        />
      )}
      <Routes>
        <Route element={<LoggedInRoutes />}>
          <Route
            path="/profile"
            element={
              <Profile setVisible={setVisible} getAllPosts={getAllPosts} />
            }
            exact
          />
          <Route
            path="/profile/:username"
            element={
              <Profile setVisible={setVisible} getAllPosts={getAllPosts} />
            }
            exact
          />
          <Route
            path="/friends"
            element={
              <Friends setVisible={setVisible} getAllPosts={getAllPosts} />
            }
            exact
          />
          <Route
            path="/"
            element={
              <Home
                setVisible={setVisible}
                posts={posts}
                loading={loading}
                getAllPosts={getAllPosts}
              />
            }
            exact
          />
          <Route path="/activate/:token" element={<Activate />} exact />
        </Route>
        <Route element={<NotLoggedInRoutes />}>
          <Route path="/login" element={<Login />} exact />
        </Route>
        <Route path="/reset" element={<Reset />} exact />
        {/**<Route path="/LearnSomeIdeas" element={<LearnSomeIdeas />} exact />*/}
      </Routes>
    </>
  );
};

export default App;
