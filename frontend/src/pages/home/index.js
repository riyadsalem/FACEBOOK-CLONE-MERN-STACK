import "./style.css";
import Header from "../../components/header";
import LeftHome from "../../components/home/left";
import { useSelector } from "react-redux";
import RightHome from "../../components/home/right";
import Stores from "../../components/home/stories";
import CreatePost from "../../components/createPost";
import SendVerificatio from "../../components/home/sendVerification";
import Post from "../../components/post";
import { useEffect, useRef, useState } from "react";
import { CircleLoader } from "react-spinners";

export default function Home({ setVisible, posts, loading, getAllPosts }) {
  const store = useSelector((store) => store);
  const { user } = store.rootReducer;
  const middle = useRef(null);
  const [height, setHeight] = useState();

  useEffect(() => {
    getAllPosts();
  }, []);

  useEffect(() => {
    setHeight(middle.current.clientHeight);
  }, [loading, height]);

  return (
    <div className="home" style={{ height: `${height + 150}px` }}>
      <Header page="home" getAllPosts={getAllPosts} />
      <LeftHome user={user} />
      <div className="home_middle" ref={middle}>
        <Stores />
        {!user.verified && <SendVerificatio user={user} />}
        <CreatePost user={user} setVisible={setVisible} />
        {loading ? (
          <div className="sekelton_loader">
            <CircleLoader color="#1876f2" />
          </div>
        ) : (
          <div className="posts">
            {posts.map((post, i) => (
              <Post key={i} post={post} user={user} />
            ))}
          </div>
        )}
      </div>
      <RightHome user={user} />
    </div>
  );
}
