import LeftLink from "./LeftLink";
import "./style.css";
import { left } from "../../../data/home";
import { Link } from "react-router-dom";
import { ArrowDown1 } from "../../../svg";
import { useState } from "react";
export default function LeftHome({ user }) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="left_home scrolbar">
      <Link to="/profile" className="left_link hover1">
        <img src={user?.picture} alt="" />
        <span>
          {user?.first_name} {user.last_name}
        </span>
      </Link>
      {left.slice(0, 8).map((link, i) => (
        <LeftLink
          img={link.img}
          text={link.text}
          notification={link.notification}
          key={i}
        />
      ))}
      {!visible && (
        <div className="left_link hover1" onClick={() => setVisible(true)}>
          <div className="small_circle">
            <ArrowDown1 />
          </div>
          <span>See more</span>
        </div>
      )}
      {visible && (
        <div className="more_left">
          {left.slice(8, left.length).map((link, i) => (
            <LeftLink
              img={link.img}
              text={link.text}
              notification={link.notification}
              key={i}
            />
          ))}
          <div className="left_link hover1" onClick={() => setVisible(false)}>
            <div className="small_circle rotate360">
              <ArrowDown1 />
            </div>
            <span>Show less</span>
          </div>
        </div>
      )}
      <div className="splitter"></div>
      <div className="shortcut">
        <div className="heading">Your Shortcuts</div>
        <div className="edit_shortcut">Edit</div>
      </div>
      <div className="shortcut_list"></div>
    </div>
  );
}
