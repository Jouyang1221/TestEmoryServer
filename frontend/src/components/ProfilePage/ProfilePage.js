import React, { Component } from "react";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "./images/meowrick.jpg";
import { Row, Col, Card, Container } from "react-bootstrap";
import Product from "./images/Product2";
import products from "./images/products2";
import "./ProfilePage.css";

function StarIcon(props) {
  const { fill = "none" } = props;
  return (
    <svg
      fill={fill}
      stroke="currentColor"
      viewBox="0 0 24 24"
      width="20"
      preserveAspectRatio="none"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      ></path>
    </svg>
  );
}

function RatingIcon(props) {
  const {
    index,
    rating,
    hoverRating,
    onMouseEnter,
    onMouseLeave,
    onSaveRating,
  } = props;
  const fill = React.useMemo(() => {
    if (hoverRating >= index) {
      return "yellow";
    } else if (!hoverRating && rating >= index) {
      return "yellow";
    }
    return "none";
  }, [rating, hoverRating, index]);
  return (
    <div
      className="cursor-pointer"
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => onSaveRating(index)}
    >
      <StarIcon fill={fill} />
    </div>
  );
}

const ProfilePage = () => {
  const [rating, setRating] = React.useState(0);
  const [hoverRating, setHoverRating] = React.useState(0);
  const onMouseEnter = (index) => {
    setHoverRating(index);
  };
  const onMouseLeave = () => {
    setHoverRating(0);
  };
  const onSaveRating = (index) => {
    setRating(index);
  };
  return (
    <>
      <div className="div-wrapper2">
        <h2>Profile Page</h2>
      </div>
      <div className="div-wrapper">
        <div className="card mb-3 div-row ">
          <ReactRoundedImage
            image={MyPhoto}
            roundedColor="#321124"
            imageWidth="150"
            imageHeight="150"
            roundedSize="13"
            borderRadius="70"
          />

          <h2 className="m-2">James Ouyang</h2>

          <h5 className="card-title text-muted m-2">
            <i className="fas fa-user"></i> @fname8
          </h5>
          <Container>
            <Row md="auto">
              {[1, 2, 3, 4, 5].map((index) => {
                return (
                  <Col
                    clasname="no-gutters"
                    xs="auto"
                    sm="auto"
                    md="auto"
                    lg="auto"
                    xl="auto"
                  >
                    <RatingIcon
                      index={index}
                      rating={rating}
                      hoverRating={hoverRating}
                      onMouseEnter={onMouseEnter}
                      onMouseLeave={onMouseLeave}
                      onSaveRating={onSaveRating}
                    />
                  </Col>
                );
              })}
            </Row>
          </Container>
          <br />
          {/* Names */}
          <h3 className="card-header bg-info text-white">Contact</h3>
          <div className="card-body">
            {/* Username */}

            <h7 className="card-title text-muted">
              <i className="fa-solid fa-phone"></i> 111-111-1111
            </h7>
            <br></br>
            <h7 className="card-title text-muted">
              <i className="fa-solid fa-envelope"></i> fnmae@emory.edu
            </h7>
          </div>

          <h4 className="card-header bg-info text-white">About Me</h4>
          <div className="card-body">
            <h4 className="-title">
              <strong>Bio:</strong>
            </h4>
            <p className="card-body">
              I am a big fan of cats and dogs. I enjoy playing video games,
              sleeping, sleeping, and sleeping
            </p>
          </div>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Major: </strong>Computer Science
            </li>
            <li className="list-group-item">
              <strong>Year: </strong>2023
            </li>
            <li className="list-group-item">
              <strong>Hobbies: </strong>Sleep and Sleep
            </li>
          </ul>
        </div>

        <div className="card w-50 h-10">
          <h2 className="card-header bg-info text-white mb-2">Listings</h2>
          <div className="card-body   h-10">
            {products.map((product) => (
              <Product product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
