import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Product from "../ProductLayouts/Product";
import { listProducts } from "../../actions/productActions";
import "./HomePage.css";

const HomePage = () => {
  //   const [products, setProducts] = useState([]);
  //   useEffect(() => {
  //     const fetchProducts = async () => {
  //       const { data } = await axios.get("/api/products");
  //       setProducts(data);
  //     };
  //     fetchProducts();
  //   }, []);

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="">
      <div className="col-12 d-flex align-items-center">
        <InputGroup className="mb-2">
          <FormControl
            className="rounded-pill"
            placeholder="Search: Textbook, Author, ISBN"
            aria-label="Textbook, Author, ISBN"
            aria-describedby="basic-addon2"
          />
          <Button
            className="rounded-pill"
            variant="outline-dark"
            id="search"
            style={{ backgroundColor: "#c1e1a7", borderColor: "#c1e1a7" }}
          >
            Search
          </Button>
        </InputGroup>
      </div>
      <br></br>
      <div>
        <h2
          className="card-header text-white "
          style={{ backgroundColor: "#1a4a5a" }}
        >
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
              <button className="popbg rounded-pill btn btn-lg m-2">
                <b>Biology</b>
              </button>
            </Col>
            <Col className="d-grid gap-2">
              <button className="popbg rounded-pill btn btn-lg m-2">
                <b>Chemistry</b>
              </button>
            </Col>

            <Col className="d-grid gap-2">
              <button className="popbg rounded-pill btn btn-lg m-2">
                <b>Psychology</b>
              </button>
            </Col>
            <Col className="d-grid gap-2">
              <button className="popbg rounded-pill btn btn-lg m-2">
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
              <button className="popbg rounded-pill btn btn-lg m-2">
                <b>Comp. Science</b>
              </button>
            </Col>
            <Col className="d-grid gap-2">
              <button className="popbg rounded-pill btn btn-lg m-2">
                <b>Physics</b>
              </button>
            </Col>

            <Col className="d-grid gap-2">
              <button className="popbg rounded-pill btn btn-lg m-2">
                <b>Math</b>
              </button>
            </Col>
            <Col className="d-grid gap-2">
              <button className="popbg rounded-pill btn btn-lg m-2">
                <b>French</b>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <br></br>
      <h2
        className="card-header text-white "
        style={{ backgroundColor: "#1a4a5a" }}
      >
        Latest Products
      </h2>

      <Row sm={1} md={2} lg={4} xl={5}>
        {products.map((product) => (
          <Col>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default HomePage;
