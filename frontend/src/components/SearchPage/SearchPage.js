import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../ProductLayouts/Product";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./SearchPage.css";
import SearchBar from "../HomePage/SearchBar";

const SearchPage = () => {
  const { key } = useParams();
  const [search, setSearch] = useState("");

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    setSearch(key.toLowerCase());
    fetchProducts();
  }, [key]);

  const filteredProducts = products.filter((product) => {
    var isbnNum = product.isbn.toString();

    if (
      !product.sold &&
      (product.name.toLowerCase().includes(search) ||
        isbnNum.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search) ||
        product.author.toLowerCase().includes(search) ||
        product.course.toLowerCase().includes(search))
    ) {
      return product;
    }
    return null;
  });

  if (search !== "" || search !== null) {
    return (
      <div>
        <div className="">
          <br></br>
          <SearchBar />
          <h2>{key}</h2>
          <br></br>

          <h2
            className="card-header text-white "
            style={{ backgroundColor: "#1a4a5a" }}
          >
            Search Results
          </h2>

          <Row sm={1} md={2} lg={4} xl={5}>
            {filteredProducts.map((product) => (
              <Col>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }
};
export default SearchPage;
