import axios from "axios";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { Row, Col, Button } from "react-bootstrap"
import "./itempage.css";
import ProfilePic from "./ItemPageProfilePic";

const ItemPage = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [sellers, setSeller] = useState("");

  useEffect(() => {
    const fetchproduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      setProduct(data);
      setSeller(data.seller);
    };
    fetchproduct();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate(`/chat`, { replace: true });
  };

  return (
    <>
      <div className="item-wrapper card" style={{}}>
        <br></br>
        <div className="img-wrapper">
          <img
            src={product.image}
            className="rounded pt-2 pb-2"
            alt="..."
            style={{ maxWidth: "21.9rem" }}
          />
        </div>
        <h1 className="txt-left w-75 card-header">{product.name}</h1>
        <div className="tags w-75 card-body" style={{}}>
          <h4 className="txt-left ">
            <b>Tags: </b>
          </h4>
          <button className="tag-bg rounded-pill btn btn-m mx-1">
            <b>{product.course}</b>
          </button>
          <button className="tag-bg rounded-pill btn btn-m mx-1">
            <b>{product.category}</b>
          </button>
          <button className="tag-bg rounded-pill btn btn-m mx-1">
            <b>{product.condition}</b>
          </button>
        </div>

        <ul className="list-group list-group-flush txt-left w-75 card-body">
          <li className="list-group-item">
            <h5>
              <b>Author: </b>
              {product.author}
            </h5>
          </li>
          <li className="list-group-item">
            <h5>
              <b>ISBN: </b>
              {product.isbn}
            </h5>
          </li>
          <li className="list-group-item">
            <h5>
              <b>Description: </b>
              {product.description}
            </h5>
          </li>
        </ul>
        <Container className="w-75">
          <Row className="item-bar card-body">
            <Col className="bar-col1">
              <ProfilePic username={sellers} />

              <Link
                className=" card-subtitle text seller-link"
                title={product.seller}
                to={`/${product.seller}`}
              >
                <h5 className="mx-2">
                  <b> {sellers}</b>
                </h5>
              </Link>
            </Col>
            <Col className="bar-col2">
              <h3 className="m-5">
                <b>${Number(product.price).toFixed(2)}</b>
              </h3>
              <Button variant="primary" size="lg" onClick={handleSubmit}>
                Chat
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ItemPage;
