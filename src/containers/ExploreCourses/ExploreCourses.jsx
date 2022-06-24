import "./ExploreCourses.scss";
import { useState, useEffect } from "react";
import SearchBox from "../../components/SearchBox/SearchBox";

const ExploreCourses = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (value) => {
    const cleanInput = value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  return (
    <div>
      <div>
        <SearchBox searchTerm={searchTerm} onInput={handleInput}></SearchBox>
      </div>
    </div>
  );
};
export default ExploreCourses;
