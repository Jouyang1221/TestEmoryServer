import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Product = ({ productNumber }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchproduct = async () => {
      const { data } = await axios.get(`/api/products/${productNumber}`);
      setProduct(data[0]);
    };
    fetchproduct();
  }, []);

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

          <div className="col-sm-6">
            <h4>
              <Link to={`/product/${product._id}`}>
                <strong>{product.name}</strong>
              </Link>
            </h4>
            <br></br>

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
              <button className="rounded-pill btn btn-warning btn-sm m-1">
                <b>{product.category}</b>
              </button>
              <button className="rounded-pill btn btn-warning btn-sm m-1">
                {product.course}
              </button>
              <button className="rounded-pill btn btn-warning btn-sm m-1">
                {product.condition}
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
