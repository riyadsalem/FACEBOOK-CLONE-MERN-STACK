import "./style.css";
import Header from "../../components/header";
import LeftHome from "../../components/home/left";
import { useSelector } from "react-redux";
import RightHome from "../../components/home/right";
import Stores from "../../components/home/stories";
import CreatePost from "../../components/createPost";
import SendVerificatio from "../../components/home/sendVerification";
import Post from "../../components/post";

export default function Home({ setVisible, posts }) {
  const store = useSelector((store) => store);
  const { user } = store.rootReducer;
  return (
    <div className="home">
      <Header />
      <LeftHome user={user} />
      <div className="home_middle">
        <Stores />
        {!user.verified && <SendVerificatio user={user} />}
        <CreatePost user={user} setVisible={setVisible} />
        <div className="posts">
          {posts.map((post, i) => (
            <Post key={i} post={post} user={user} />
          ))}
        </div>
      </div>
      <RightHome user={user} />
    </div>
  );
}
