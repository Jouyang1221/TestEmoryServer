import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import HeaderSignedIn from "../components/Headers/HeaderSignedIn";
import OwnProfilePage from "../components/ProfilePage/OwnProfilePage";
import ProfilePage from "../components/ProfilePage/ProfilePage";

const IfOwnProfile = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const username = user.username;
  const profUsername = useParams();

  if (user.username === profUsername.username) {
    return (
      <>
        <HeaderSignedIn />
        <OwnProfilePage />
      </>
    );
  } else {
    return (
      <>
        <HeaderSignedIn />
        <ProfilePage />
      </>
    );
  }
};

export default IfOwnProfile;
