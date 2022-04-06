import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../components/Product";
import { listProducts } from "../actions/productActions.js";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className="">
          <div className="col-12 d-flex align-items-center">
            <form className="input-group">
              <input
                type="search"
                className="form-control rounded search"
                placeholder="Search: Textbook, Author, ISBN"
              />
              <button type="submit" className="search-button">
                Search
              </button>
            </form>
          </div>
          <br></br>
          <div>
            <h2 className="card-header bg-info text-white ">
              Popular Subjects
            </h2>
            <Container className="">
              <Row
                className="justify-content-md-center"
                sm={1}
                md={2}
                lg={4}
                xl={5}
              >
                <Col className="d-grid gap-2">
                  <button className=" btn btn-primary btn-lg m-2">
                    <b>Biology</b>
                  </button>
                </Col>
                <Col className="d-grid gap-2">
                  <button className=" btn btn-primary btn-lg m-2">
                    <b>Chemistry</b>
                  </button>
                </Col>

                <Col className="d-grid gap-2">
                  <button className=" btn btn-primary btn-lg m-2">
                    <b>Psychology</b>
                  </button>
                </Col>
                <Col className="d-grid gap-2">
                  <button className="btn btn-lg btn-primary m-2">
                    <b>English</b>
                  </button>
                </Col>
              </Row>

              <Row
                className="justify-content-md-center"
                sm={1}
                md={2}
                lg={4}
                xl={5}
              >
                <Col className="d-grid gap-2">
                  <button className=" btn btn-primary btn-lg m-2">
                    <b>Comp Sci</b>
                  </button>
                </Col>
                <Col className="d-grid gap-2">
                  <button className=" btn btn-primary btn-lg m-2">
                    <b>Physics</b>
                  </button>
                </Col>

                <Col className="d-grid gap-2">
                  <button className=" btn btn-primary btn-lg m-2">
                    <b>Math</b>
                  </button>
                </Col>
                <Col className="d-grid gap-2">
                  <button className="btn btn-lg btn-primary m-2">
                    <b>French</b>
                  </button>
                </Col>
              </Row>
            </Container>
          </div>
          <br></br>
          <h2 className="card-header bg-info text-white ">Latest Products</h2>

          <Row sm={1} md={2} lg={4} xl={5}>
            {products.map((product) => (
              <Col>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
};
export default HomeScreen;
