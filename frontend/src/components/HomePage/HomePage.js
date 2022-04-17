import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../ProductLayouts/Product";
import { listProducts } from "../../actions/productActions";
import "./HomePage.css";
import SearchBar from "./SearchBar";
import { LinkContainer } from "react-router-bootstrap";

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
      <SearchBar />
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
            <LinkContainer to="/search/Biology">
              <Col className="d-grid gap-2">
                <button className="popbg rounded-pill btn btn-lg m-2">
                  <b>Biology</b>
                </button>
              </Col>
            </LinkContainer>
            <LinkContainer to="/search/Chemistry">
              <Col className="d-grid gap-2">
                <button className="popbg rounded-pill btn btn-lg m-2">
                  <b>Chemistry</b>
                </button>
              </Col>
            </LinkContainer>
            <LinkContainer to="/search/Psychology">
              <Col className="d-grid gap-2">
                <button className="popbg rounded-pill btn btn-lg m-2">
                  <b>Psychology</b>
                </button>
              </Col>
            </LinkContainer>

            <LinkContainer to="/search/Anthropology">
              <Col className="d-grid gap-2">
                <button className="popbg rounded-pill btn btn-lg m-2">
                  <b>Anthropology</b>
                </button>
              </Col>
            </LinkContainer>
          </Row>

          <Row
            className="justify-content-md-center"
            sm={1}
            md={2}
            lg={4}
            xl={5}
          >
            <LinkContainer to="/search/Computer Science">
              <Col className="d-grid gap-2">
                <button className="popbg rounded-pill btn btn-lg m-2">
                  <b>Comp. Science</b>
                </button>
              </Col>
            </LinkContainer>
            <LinkContainer to="/search/Physics">
              <Col className="d-grid gap-2">
                <button className="popbg rounded-pill btn btn-lg m-2">
                  <b>Physics</b>
                </button>
              </Col>
            </LinkContainer>
            <LinkContainer to="/search/Math">
              <Col className="d-grid gap-2">
                <button className="popbg rounded-pill btn btn-lg m-2">
                  <b>Math</b>
                </button>
              </Col>
            </LinkContainer>
            <LinkContainer to="/search/Economics">
              <Col className="d-grid gap-2">
                <button className="popbg rounded-pill btn btn-lg m-2">
                  <b>Economics</b>
                </button>
              </Col>
            </LinkContainer>
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
