import ReactRoundedImage from "react-rounded-image";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import "./ProfilePage.css";
import { Row, Col, Container } from "react-bootstrap";
import Product from "./ProfilePageListing";
import Rating1 from "../userStars/userStars";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);

  const { username } = useParams();
  const [users, setUser] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchuser = async () => {
      const { data } = await axios.get(`/api/users/${username}`);
      setUser(data[0]);
    };
    fetchuser();
  }, []);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`/api/products/profile/${username}`);
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <div className="div-wrapper2"></div>
      <div className="div-wrapper">
        <div className="card bl-corner my-3 div-row w-75">
          <Row>
            <Col>
              <div className="wrapper my-3 mx-2">
                <ReactRoundedImage
                  className="wrapper"
                  image={users.image}
                  roundedColor="#EFBC75"
                  imageWidth="150"
                  imageHeight="150"
                  roundedSize="13"
                  borderRadius="70"
                />
              </div>
              <h3 className="m-2 wrapper">{users.name}</h3>
              <h5 className="card-title text-muted m-2 wrapper">
                <i className="fas fa-user wrapper"></i> @{users.username}
              </h5>
              {/* <div className="mx-2 wrapper">
            <Rating1
              rating={users.rating}
              numReview={` ${users.reviews} reviews`}
            />
          </div> */}
              <div className="card-body">
                <h5 className="card-title mx-2">
                  <b>Bio:</b>
                </h5>
                <p className="card-body">{users.bio}</p>
              </div>
            </Col>
            <Col>
              <br />
              {/* Names */}
              <h5 className="card-header subtitle text-white mx-2">
                <b>Contact</b>
              </h5>
              <div className="card-body">
                {/* Username */}

                <h6 className="card-title text-muted">
                  <i className="fa-solid fa-phone"></i> {users.phone}
                </h6>
                <br></br>
                <h6 className="card-title text-muted">
                  <i className="fa-solid fa-envelope"></i> {users.email}
                </h6>
              </div>

              <h5 className="card-header subtitle mx-2 text-white">About Me</h5>
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
            </Col>
          </Row>
          <h2 className="card-header subtitle mx-2 text-white">Listings</h2>
          <div className="card-body h-10">
            {products.map((list) => (
              <Product product={list}></Product>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
