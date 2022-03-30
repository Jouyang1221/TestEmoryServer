import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "../ProfilePage.css";

const Product = ({ product }) => {
  return (
    <div clasName="wrapper row w-75">
      <Card className="my-2 p-2 ">
        <div className="row">
          <div className="col-sm-4">
            <Link to={`/product/${product._id}`}>
              <Card.Img
                className="card-img-top"
                src={product.image}
                variant="top"
              />
            </Link>
          </div>

          {/* <Card.Body>
        <Link to={`/product/${product._id}`}>
          <strong>{product.name}</strong>
        </Link>
        <Card.Text as="div" className="my-3">
          <div>Seller Rating: {product.rating}</div>
          <div>{product.numReviews} reviews</div>
        </Card.Text>
        <Card.Text>${product.price}</Card.Text>
      </Card.Body> */}
          <div className="col-sm-6">
            <h4>
              <Link to={`/product/${product._id}`}>
                <strong>{product.name}</strong>
              </Link>
            </h4>
            <br></br>

            <Card.Text>Author: {product.Author}</Card.Text>
            <Card.Text>ISBN: {product.ISBN}</Card.Text>
            <Card.Text>Description: {product.description}</Card.Text>
            <div className="tags" style={{}}>
              <h5 className="txt-left m-1">
                <b>Tags: </b>
              </h5>
              <button className="rounded-pill btn btn-warning btn-sm m-1">
                <b>CS 253</b>
              </button>
              <button className="rounded-pill btn btn-warning btn-sm m-1">
                Computer Science
              </button>
              <button className="rounded-pill btn btn-warning btn-sm m-1">
                Fair
              </button>
            </div>
          </div>
          <div className="col-sm-2">
            <Card.Title>${product.price}</Card.Title>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Product;
