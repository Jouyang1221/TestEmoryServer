import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Product from "../ProductLayouts/Product";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./HomePage.css";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  let navigate = useNavigate();

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate(`/search/${String(search)}`, { replace: true });
  };
  return (
    <div className="col-12 d-flex align-items-center">
      <InputGroup className="mb-2" id="search" onSubmit={handleSubmit}>
        <FormControl
          className="rounded-pill"
          type="text"
          value=" a"
          placeholder="Search: Textbook, Author, ISBN"
          aria-label="Textbook, Author, ISBN"
          aria-describedby="basic-addon2"
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={handleKeypress}
        />
        <Button
          className="rounded-pill"
          variant="outline-dark"
          type="submit"
          form="search"
          style={{ backgroundColor: "#c1e1a7", borderColor: "#c1e1a7" }}
        >
          Search
        </Button>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
