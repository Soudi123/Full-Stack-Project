import React from "react";
import { useState } from "react";
import "./SearchBox.scss";

const SearchBox = (props) => {
  const { onInput } = props;

  const [searchTerm, setSearchTerm] = useState("");
  const handleInput = (e) => {
    setSearchTerm(e.target.value);
    onInput(e.target.value);
  };

  return (
    <form className="search-box">
      <label className="search-box__label">
        {" "}
        Find your next course!.... 
      </label>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInput}
        className="search-box__input"
      />
    </form>
  );
};

export default SearchBox;
