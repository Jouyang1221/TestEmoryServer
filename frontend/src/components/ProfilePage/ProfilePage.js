import ReactRoundedImage from "react-rounded-image";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import "./ProfilePage.css";
// import Product from "./ProfilePageListing";
import Rating1 from "../userStars/userStars";
import axios from "axios";

const ProfilePage = () => {
  const { username } = useParams();
  const [users, setUser] = useState({});
  const [listingsArray, setListingArray] = useState([]);

  useEffect(() => {
    const fetchuser = async () => {
      const { data } = await axios.get(`/api/users/${username}`);
      setUser(data[0]);
    };
    fetchuser();
  }, []);

  return (
    <>
      <div className="div-wrapper2">
        <h2>Profile Page</h2>
      </div>
      <div className="div-wrapper">
        <div className="card mb-3 div-row w-50 ">
          <div className="wrapper">
            <ReactRoundedImage
              className="wrapper"
              image={users.image}
              roundedColor="#321124"
              imageWidth="150"
              imageHeight="150"
              roundedSize="13"
              borderRadius="70"
            />
          </div>
          <h2 className="m-2 wrapper">{users.name}</h2>
          <h5 className="card-title text-muted m-2 wrapper">
            <i className="fas fa-user wrapper"></i> @{users.username}
          </h5>
          <div className="mx-2 wrapper">
            <Rating1
              rating={users.rating}
              numReview={` ${users.reviews} reviews`}
            />
          </div>

          <br />
          {/* Names */}
          <h3 className="card-header bg-info text-white">Contact</h3>
          <div className="card-body">
            {/* Username */}

            <h7 className="card-title text-muted">
              <i className="fa-solid fa-phone"></i> {users.phone}
            </h7>
            <br></br>
            <h7 className="card-title text-muted">
              <i className="fa-solid fa-envelope"></i> {users.email}
            </h7>
          </div>

          <h4 className="card-header bg-info text-white">About Me</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h5>
                <strong>Major: </strong>
                {users.major}
              </h5>
            </li>
            <li className="list-group-item">
              <h5>
                <strong>Year: </strong>
                {users.year}
              </h5>
            </li>
          </ul>
          <div className="card-body">
            <h4 className="-title">
              <strong>Bio:</strong>
            </h4>
            <p className="card-body">{users.bio}</p>
          </div>
        </div>

        <div className="card w-50 h-10">
          <h2 className="card-header bg-info text-white mb-2">Listings</h2>
          <div className="card-body  h-10">
            {/* <Product productNumber={users.id}></Product> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
