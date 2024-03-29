import axios from "axios";
import { useEffect } from "react";
import { useReducer } from "react";
import { photosReducer } from "../../functions/reducers";

export default function Photos({ username, token, photos }) {
  /*
  const [{ loading, error, photos }, dispatch] = useReducer(photosReducer, {
    loading: false,
    photos: {},
    error: "",
  });

  const path = `${username}/*`;
  const sort = "desc";
  const max = "30";

  useEffect(() => {
    getPhotos();
  }, [username]);

  const getPhotos = async () => {
    try {
      dispatch({
        type: "PHOTOS_REQUEST",
      });
      const { data } = await axios.post(
        `http://localhost:8000/listImages`,
        { path, sort, max },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({
        type: "PHOTOS_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "PHOTOS_ERROR",
        payload: error.response.data.message,
      });
    }
  };
  */
  return (
    <div className="profile_card">
      <div className="profile_card_header">
        Photos
        <div className="profile_header_link">See all photos</div>
      </div>
      <div className="profile_card_count">
        {photos.total_count === 0
          ? ""
          : photos.total_count === 1
          ? "1 photos"
          : `${photos.total_count} photos`}
      </div>
      <div className="profile_card_grid">
        {photos.resources &&
          photos.resources.length &&
          photos.resources.slice(0, 9).map((img) => (
            <div className="profile_photo_card" key={img.public_id}>
              <img src={img.secure_url} alt="" />
            </div>
          ))}
      </div>
    </div>
  );
}
