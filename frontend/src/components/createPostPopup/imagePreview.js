import { useRef } from "react";
import EmojiPickerBackgrounds from "./EmojiPickerBackgrounds";
export default function ImagePreview({
  text,
  setText,
  user,
  images,
  setImages,
}) {
  const imageInputRef = useRef(null);
  const handleImages = () => {};
  return (
    <div className="overflow_a">
      <EmojiPickerBackgrounds text={text} setText={setText} user={user} type2 />
      <div className="add_pics_wrap">
        <input
          type="file"
          multiple
          hidden
          ref={imageInputRef}
          onChange={handleImages}
        />
        {images && images.length ? (
          ""
        ) : (
          <div className="add_pics_inside1">
            <div className="small_white_circle">
              <i className="exit_icon"></i>
            </div>
            <div className="add_col">
              <div className="add_circle">
                <i className="addPhoto_icon"></i>
              </div>
              <span>Add Photos/Videos</span>
              <span>or drag and drop</span>
            </div>
          </div>
        )}
        <div className="add_pics_inside2">
          <div className="add_circle">
            <i className="phone_icon"></i>
          </div>
          <div className="mobile_text">add phots from your mobile device.</div>
          <span className="addphone_btn">Add</span>
        </div>
      </div>
    </div>
  );
}
