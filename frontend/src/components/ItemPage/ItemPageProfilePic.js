import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactRoundedImage from "react-rounded-image";
import axios from "axios";

const ProfilePic = ({ username }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchuser = async () => {
      const { data } = await axios.get(`/api/users/${username}`);
      setUser(data);
    };
    fetchuser();
  }, []);

  return (
    <>
      <ReactRoundedImage
        className="wrapper"
        image={user.image}
        roundedColor="#321124"
        imageWidth="110"
        imageHeight="100"
        roundedSize="10"
        borderRadius="50"
      />
    </>
  );
};

export default ProfilePic;
