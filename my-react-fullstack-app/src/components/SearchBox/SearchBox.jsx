import React from "react";

import "./SearchBox.scss";

const SearchBox = () => {
 /*    const { label, searchTerm, handleInput } = props; */
  
    /* const capitalizedLabel = label[0].toUpperCase() + label.slice(1);
   */
    return (
      <form className="search-box">
        <label  className="search-box__label"> Find your next course!.... {/* {capitalizedLabel} */}</label>
        <input type="text" /* name={label} value={searchTerm} onInput={handleInput} */ className="search-box__input"/>
      </form>
    );
  };
  
  export default SearchBox;
  