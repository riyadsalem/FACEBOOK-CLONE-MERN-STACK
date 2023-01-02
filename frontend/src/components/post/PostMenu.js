import { useState } from "react";
import MenuItem from "./MenuItem";

export default function PostMenu({
  postUserId,
  userId,
  imagesLength,
  setShowMenu,
}) {
  const [test, setTest] = useState(postUserId === userId ? true : false);
  return (
    <ul className="post_menu">
      {" "}
      {test && <MenuItem icon="pin_icon" title="Pin Post" />}
      {!test && (
        <MenuItem
          icon="save_icon"
          title="Unsave Post"
          subtitle="Remove this from your saved items."
        />
      )}
      <div className="line"></div>
    </ul>
  );
}
