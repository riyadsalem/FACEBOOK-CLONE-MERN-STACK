import { Link } from "react-router-dom";

export default function Card({ userr, type }) {
  return (
    <div className="req_card">
      <Link to={`/profile/${userr.username}`}>
        <img src={userr.picture} alt="" />
      </Link>
      <div className="req_name">
        {userr.first_name} {userr.last_name}
      </div>
      {type === "sent" ? (
        <button className="blue_btn">Cancel Request</button>
      ) : type === "request" ? (
        <>
          <button className="blue_btn">Confirm</button>
          <button className="gray_btn">Delete</button>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
