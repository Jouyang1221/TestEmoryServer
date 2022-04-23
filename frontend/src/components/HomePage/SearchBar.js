import React, { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

import "./HomePage.css";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  let navigate = useNavigate();

  return (
    <div className="col-12 d-flex align-items-center">
      <InputGroup className="mb-2">
        <FormControl
          className="rounded-pill"
          type="text"
          placeholder="Search: Textbook, Author, ISBN"
          aria-label="Textbook, Author, ISBN"
          aria-describedby="basic-addon2"
          onChange={(e) => setSearch(e.target.value)}
        />
        <LinkContainer to={`/search/${String(search)}`}>
          <Button
            className="rounded-pill"
            variant="outline-dark"
            style={{ backgroundColor: "#c1e1a7", borderColor: "#c1e1a7" }}
          >
            Search
          </Button>
        </LinkContainer>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
