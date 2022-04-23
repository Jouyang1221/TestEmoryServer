import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import "./ProfilePageListing.css";
import axios from "axios";

const Product = ({ product }) => {
  const navigate = useNavigate();

  const onClickCat = () => {
    try {
      navigate(`/search/${product.category}`, { replace: true });
    } catch (err) {}
  };

  const onClickCourse = () => {
    try {
      navigate(`/search/${product.course}`, { replace: true });
    } catch (err) {}
  };

  // useEffect(() => {
  //   const fetchproduct = async () => {
  //     const { data } = await axios.get(`/api/products/${productNumber}`);
  //     setProduct(data[0]);
  //   };
  //   fetchproduct();
  // }, []);

  return (
    <div className="wrapper  row">
      <Card className="edge my-2 p-2">
        <div className="row w-75">
          <div className="col-sm-4">
            <Link to={`/product/${product._id}`}>
              <Card.Img
                className="card-img-top"
                src={product.image}
                variant="top"
              />
            </Link>
          </div>
          <div className="col-sm-6">
            <h4>
              <Link to={`/product/${product._id}`}>
                <strong>{product.name}</strong>
              </Link>
            </h4>
            <br></br>
            <Card.Text>
              <strong>Price:</strong> ${product.price}
            </Card.Text>
            <Card.Text>
              <strong>Author:</strong> {product.author}
            </Card.Text>
            <Card.Text>
              <strong>ISBN:</strong> {product.isbn}
            </Card.Text>
            <Card.Text>
              <strong>Description:</strong> {product.description}
            </Card.Text>
            <div className="tags" style={{}}>
              <button
                className="rounded-pill btn btn-warning btn-sm m-1"
                onClick={onClickCat}
              >
                <b>{product.category}</b>
              </button>
              <button
                className="rounded-pill btn btn-warning btn-sm m-1"
                onClick={onClickCourse}
              >
                {product.course}
              </button>
              <button className="rounded-pill btn btn-warning btn-sm m-1">
                {product.condition}
              </button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Product;
