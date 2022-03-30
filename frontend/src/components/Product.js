import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./ProfilePage/ProfilePage.css";

const Product = ({ product }) => {
  return (
    <Card className="my-2 p-2 card-size">
      <Link to={`/product/${product._id}`}>
        <Card.Img className="photo" src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <strong>{product.name}</strong>
        </Link>
        <Card.Text as="div" className="my-3">
          <div>Seller Rating: {product.rating}</div>
          <div>{product.numReviews} reviews</div>
        </Card.Text>
        <Card.Text>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
