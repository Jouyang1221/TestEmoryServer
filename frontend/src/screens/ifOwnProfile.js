import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import HeaderSignedIn from "../components/Headers/HeaderSignedIn";
import OwnProfilePage from "../components/ProfilePage/OwnProfilePage";
import ProfilePage from "../components/ProfilePage/ProfilePage";

const IfOwnProfile = () => {
  const { user } = useContext(AuthContext);
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
