import "./style.css";
import axios from "axios";
import { useEffect, useReducer } from "react";
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

export default function Profile({ setVisible }) {
  const { username } = useParams();
  const { user } = useSelector((store) => ({ ...store.rootReducer }));
  const userName = username === undefined ? user.username : username;
  const [{ loading, error, profile }, dispatch] = useReducer(profileReducer, {
    loading: false,
    profile: {},
    error: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    getProfile();
  }, [userName]);

  var visitor = userName === user.username ? false : true;

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
            <Cover cover={profile.cover} visitor={visitor} />
            <ProfielPictureInfos profile={profile} visitor={visitor} />
            <ProfileMenu />
          </div>
        </div>
        <div className="profile_bottom">
          <div className="profile_container">
            <div className="bottom_container">
              <PplYouMayKnow />
              <div className="profile_grid">
                <div className="profile_left"></div>
                <div className="profile_right">
                  {!visitor && (
                    <CreatePost user={user} profile setVisible={setVisible} />
                  )}
                  <GridPosts />
                  <div className="posts">
                    {profile.posts && profile.posts.length ? (
                      profile.posts.map((post) => (
                        <Post post={post} user={user} key={post._id} />
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
