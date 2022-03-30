import axios from "axios";
import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { Row, Col, Button } from "react-bootstrap";
import "./itempage.css";

const ItemPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchproduct = async () => {
      const { data } = await axios.get(`/api/products/${Number(id)}`);
      setProduct(data);
    };
    fetchproduct();
  }, []);
  return (
    <div className="item-wrapper" style={{}}>
      <div className="img-wrapper">
        <img
          src={product.image}
          className="rounded pt-2 pb-2"
          alt="..."
          style={{ maxWidth: "21.9rem" }}
        />
      </div>
      <h1 className="txt-left w-75">{product.name}</h1>
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
      <h5 className="txt-left w-75">
        <b>Description: </b>
        {product.description}
      </h5>
      <Container fluid>
        <Row className="item-bar">
          <Col className="bar-col1">
            <img
              src="https://www.kindpng.com/picc/m/171-1712282_profile-icon-png-profile-icon-vector-png-transparent.png"
              className="rounded pt-2 pb-2 mr-2"
              alt="..."
              style={{ maxWidth: "75px" }}
            />
            <h5 className="ml-2">
              <b>
                <u>First Name Last Name</u>
              </b>
            </h5>
          </Col>
          <Col className="bar-col1">
            <h3 className="m-5">
              <b>${product.price}</b>
            </h3>
            <Button variant="primary" size="lg">
              Chat
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ItemPage;
