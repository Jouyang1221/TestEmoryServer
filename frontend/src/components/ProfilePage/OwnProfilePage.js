import ReactRoundedImage from "react-rounded-image";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import "./OwnProfilePage.css";
import Product from "./ProfilePageListing";
// import Rating1 from "../userStars/userStars";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const OwnProfilePage = () => {
  const { user } = useContext(AuthContext);
  const username = user.username;
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
              <h3 className="m-2 wrapper">
                {users.name}
                <Link to={`/own/edit`}>
                  <i className="fa-solid fa-pencil mx-2"></i>
                </Link>
              </h3>
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
                    <strong>Grad Year: </strong>
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
// return (
//   <>
//     <div className="div-wrapper2">
//       <h2>Profile Page</h2>
//     </div>
//     <div className="div-wrapper">
//       <div className="card mb-3 div-row w-50 ">
//         <div className="wrapper">
//           <ReactRoundedImage
//             className="wrapper"
//             image={users.image}
//             roundedColor="#321124"
//             imageWidth="150"
//             imageHeight="150"
//             roundedSize="13"
//             borderRadius="70"
//           />
//         </div>
//         <h2 className="m-2 wrapper">
//           {users.name}
//           <Link to={`/own/edit`}>
//             <i className="fa-solid fa-pencil"></i>
//           </Link>
//         </h2>
//         <h5 className="card-title text-muted m-2 wrapper">
//           <i className="fas fa-user wrapper"></i> @{users.username}
//         </h5>
//         {/* <div className="mx-2 wrapper">
//           <Rating1
//             rating={users.rating}
//             numReview={` ${users.reviews} reviews`}
//           />
//         </div> */}

//         <br />
//         {/* Names */}
//         <h3 className="card-header bg-info text-white">Contact</h3>
//         <div className="card-body">
//           {/* Username */}

//           <h6 className="card-title text-muted">
//             <i className="fa-solid fa-phone"></i> {users.phone}
//           </h6>
//           <br></br>
//           <h6 className="card-title text-muted">
//             <i className="fa-solid fa-envelope"></i> {users.email}
//           </h6>
//         </div>

//         <h4 className="card-header bg-info text-white">About Me</h4>
//         <ul className="list-group list-group-flush">
//           <li className="list-group-item">
//             <h5>
//               <strong>Major: </strong>
//               {users.major}
//             </h5>
//           </li>
//           <li className="list-group-item">
//             <h5>
//               <strong>Year: </strong>
//               {users.year}
//             </h5>
//           </li>
//         </ul>
//         <div className="card-body">
//           <h4 className="-title">
//             <strong>Bio:</strong>
//           </h4>
//           <p className="card-body">{users.bio}</p>
//         </div>
//       </div>

//       <div className="card w-50 h-10">
//         <h2 className="card-header bg-info text-white mb-2">Listings</h2>
//         <div className="card-body  h-10">
//           <Product productNumber={listingsArray}></Product>
//         </div>
//       </div>
//     </div>
//   </>
// );
// };

export default OwnProfilePage;
