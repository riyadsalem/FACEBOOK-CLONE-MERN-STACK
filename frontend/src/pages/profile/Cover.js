import { useRef, useState } from "react";
import useClickOutisde from "../../helpers/clickOutside";

export default function Cover({ cover }) {
  const [showCoverMneu, setShowCoverMenu] = useState(true);
  const menuRef = useRef(null);
  useClickOutisde(menuRef, () => setShowCoverMenu(false));
  return (
    <div className="profile_cover" ref={menuRef}>
      {cover && <img src={cover} alt="" />}
      <div className="update_cover_wrapper">
        <div
          className="open_cover_update"
          onClick={() => setShowCoverMenu((prev) => !prev)}
        >
          <i className="camera_filled_icon"></i>
          Add Cover Photo
        </div>
        {showCoverMneu && (
          <div className="open_cover_menu">
            <div className="open_cover_menu_item hover1">
              <i className="photo_icon"></i>
              Select Photo
            </div>
            <div className="open_cover_menu_item hover1">
              <i className="upload_icon"></i>
              Upload Photo
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
