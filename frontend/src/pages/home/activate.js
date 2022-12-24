import "./style.css";
import Header from "../../components/header";
import LeftHome from "../../components/home/left";
import { useSelector } from "react-redux";
import RightHome from "../../components/home/right";
import Stores from "../../components/home/stories";
import CreatePost from "../../components/createPost";
import { useState } from "react";
import ActivateForm from "../../components/home/ActivateForm";

export default function Activate() {
  const store = useSelector((store) => store);
  const { user } = store.rootReducer;
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="home">
      {success && (
        <ActivateForm
          type="success"
          header="Account verification succeded."
          text={success}
          loading={loading}
        />
      )}
      {error && (
        <ActivateForm
          type="error"
          header="Account verification succeded."
          text={error}
          loading={loading}
        />
      )}{" "}
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
