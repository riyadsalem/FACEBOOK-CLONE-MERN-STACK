import "./style.css";
import Header from "../../components/header";
import LeftHome from "../../components/home/left";
import { useSelector } from "react-redux";
import RightHome from "../../components/home/right";
import Stores from "../../components/home/stories";
import CreatePost from "../../components/createPost";

export default function Home() {
  const store = useSelector((store) => store);
  const { user } = store.rootReducer;
  return (
    <div className="home">
      <Header />
      <LeftHome user={user} />
      <div className="home_middle">
        <Stores />
        <CreatePost user={user} />
      </div>
      <RightHome user={user} />
    </div>
  );
}
