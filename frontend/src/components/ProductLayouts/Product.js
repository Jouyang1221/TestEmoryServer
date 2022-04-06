import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <Card className="my-2 p-2 card-siz">
      <div className="center-img">
        <Link className="" to={`/product/${product._id}`}>
          <Card.Img className="photo" src={product.image} variant="top" />
        </Link>
      </div>
      <Card.Body>
        <Link title={product.name} to={`/product/${product._id}`}>
          <strong className="text">{product.name}</strong>
        </Link>
        <Card.Text as="div" className="my-3 list-group list-group-flush">
          <div className="">
            <h6 className="card-subtitle text-muted text">
              By {product.author}
            </h6>
            <br></br>
            <br></br>
          </div>
          <div className="row ">
            <div className="col-sm-7 ">
              <Link
                className=" card-subtitle text seller-link"
                title={product.seller}
                to={`/${product.seller}`}
              >
                <h6>{product.seller}</h6>
              </Link>
            </div>
            <div className="col-sm-5">
              <Card.Text>
                <h6>${product.price.toFixed(2)}</h6>
              </Card.Text>
            </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
