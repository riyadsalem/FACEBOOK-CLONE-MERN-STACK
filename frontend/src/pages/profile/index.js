import "./style.css";
import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { profileReducer } from "../../functions/reducers";
import Header from "../../components/header";
import Cover from "./Cover";
import ProfielPictureInfos from "./ProfielPictureInfos";
import ProfileMenu from "./ProfileMenu";
import PplYouMayKnow from "./PplYouMayKnow";
import CreatePost from "../../components/createPost";
import GridPosts from "./GridPosts";
import Post from "../../components/post";
import Photos from "./Photos";
import Friends from "./Friends";
import { Link } from "react-router-dom";
import Intro from "../../components/intro";

export default function Profile({ setVisible }) {
  const { username } = useParams();
  const { user } = useSelector((store) => ({ ...store.rootReducer }));
  const [photos, setPhotos] = useState({});
  const userName = username === undefined ? user.username : username;
  const [{ loading, error, profile }, dispatch] = useReducer(profileReducer, {
    loading: false,
    profile: {},
    error: "",
  });
  const navigate = useNavigate();
  var visitor = userName === user.username ? false : true;
  const path = `${userName}/*`;
  const sort = "desc";
  const max = "30";

  useEffect(() => {
    getProfile();
  }, [userName]);

  const getProfile = async () => {
    try {
      dispatch({
        type: "PROFILE_REQUEST",
      });
      const { data } = await axios.get(
        `http://localhost:8000/getProfile/${userName}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      if (data.ok === false) {
        navigate("/profile");
      } else {
        try {
          const images = await axios.post(
            `http://localhost:8000/listImages`,
            { path, sort, max },
            {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            }
          );
          setPhotos(images.data);
        } catch (error) {
          console.log(error);
        }
        dispatch({
          type: "PROFILE_SUCCESS",
          payload: data,
        });
      }
    } catch (error) {
      dispatch({
        type: "PROFILE_ERROR",
        payload: error.response.data.message,
      });
    }
  };
  return (
    <>
      <div className="profile">
        <Header page="profile" />
        <div className="profile_top">
          <div className="profile_container">
            <Cover
              cover={profile.cover}
              visitor={visitor}
              photos={photos.resources}
            />
            <ProfielPictureInfos
              profile={profile}
              visitor={visitor}
              photos={photos.resources}
            />
            <ProfileMenu />
          </div>
        </div>
        <div className="profile_bottom">
          <div className="profile_container">
            <div className="bottom_container">
              <PplYouMayKnow />
              <div className="profile_grid">
                <div className="profile_left">
                  <Intro details={profile.details} />
                  <Photos
                    username={userName}
                    token={user.token}
                    photos={photos}
                  />
                  <Friends friends={profile.friends} />
                  <div className="relative_fb_copyright">
                    <Link to="/">Privacy </Link>
                    <span>. </span>
                    <Link to="/">Terms </Link>
                    <span>. </span>
                    <Link to="/">Advertising </Link>
                    <span>. </span>
                    <Link to="/">
                      Ad Choices <i className="ad_choices_icon"></i>{" "}
                    </Link>
                    <span>. </span>
                    <Link to="/"></Link>Cookies <span>. </span>
                    <Link to="/">More </Link>
                    <span>. </span> <br />
                    Meta © 2022
                  </div>
                </div>
                <div className="profile_right">
                  {!visitor && (
                    <CreatePost user={user} profile setVisible={setVisible} />
                  )}
                  <GridPosts />
                  <div className="posts">
                    {profile.posts && profile.posts.length ? (
                      profile.posts.map((post) => (
                        <Post post={post} user={user} key={post._id} profile />
                      ))
                    ) : (
                      <div className="no_posts">No posts available</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
