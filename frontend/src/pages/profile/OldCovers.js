import { useRef } from "react";
import { useSelector } from "react-redux";
import useClickOutisde from "../../helpers/clickOutside";

export default function OldCovers({ setCoverPicture, setShow, photos }) {
  const { user } = useSelector((store) => ({ ...store.rootReducer }));
  const Ref = useRef(null);
  useClickOutisde(Ref, () => setShow(false));
  return (
    <div className="blur">
      <div className="postBox selectCoverBox" ref={Ref}>
        <div className="box_header">
          <div className="small_circle" onClick={() => setShow(false)}>
            <i className="exit_icon"></i>
          </div>
          <span>Select photo</span>
        </div>
        <div className="selectCoverBox_links">
          <div className="selectCoverBox_link">Recent Photos</div>
          <div className="selectCoverBox_link">Photo Albums</div>
        </div>
        <div className="old_pictures_wrap scrolbar">
          <div className="old_pictures">
            {photos &&
              photos
                .filter(
                  (img) => img.folder === `${user.username}/cover_pictures`
                )
                .map((photo) => (
                  <img
                    src={photo.secure_url}
                    key={photo.public_id}
                    alt=""
                    onClick={() => {
                      setCoverPicture(photo.secure_url);
                      setShow(false);
                    }}
                  />
                ))}
          </div>
          <div className="old_pictures">
            {photos &&
              photos
                .filter((img) => img.folder !== `${user.username}/post_images`)
                .map((photo) => (
                  <img
                    src={photo.secure_url}
                    key={photo.public_id}
                    alt=""
                    onClick={() => {
                      setCoverPicture(photo.secure_url);
                      setShow(false);
                    }}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
