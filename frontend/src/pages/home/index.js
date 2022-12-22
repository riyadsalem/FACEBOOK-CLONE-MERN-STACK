import "./style.css";
import Header from "../../components/header";
import LeftHome from "../../components/home/left";
import { useSelector } from "react-redux";
import RightHome from "../../components/home/right";

export default function Home() {
  const store = useSelector((store) => store);
  const { user } = store.rootReducer;
  return (
    <div>
      <Header />
      <LeftHome user={user} />
      <RightHome user={user} />
    </div>
  );
}
