import "./courseList.scss";

import { useState, useEffect } from "react";

import CourseCards from "../../components/CourseCards/CourseCards";
import SearchBox from "../../components/SearchBox/SearchBox";
import { Navigate } from "react-router-dom";

const CourseList = () => {
  const [searchedCourses, setSearchedCourses] = useState([]);
  const [courses, setCourses] = useState([]);

  const getCourses = () => {
    fetch("http://localhost:8081/courses")
      .then((res) => res.json())
      .then((json) => setCourses(json))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCourses();
  }, []);

  console.log(courses);
  const getSearchedCourses = () => {
    fetch("http://localhost:8081/courses")
      .then((res) => res.json())
      .then((json) => setSearchedCourses(json))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getSearchedCourses();
  }, []);

  console.log(searchedCourses);

  const handleInput = (searchTerm) => {
    const searchResults = courses.filter((course) => {
      if (course.name.toLowerCase().includes(searchTerm)) {
        return true;
      } else {
        return false;
      }
    });

    setSearchedCourses(searchResults);
  };
  

  const courseListJSX = searchedCourses.map((course) => {
    return (
      <CourseCards
        name={course.name}
        location={course.location}
        duration={course.duration}
        id={course.id}
      ></CourseCards>
    );
  });

  return (
    <>
      <SearchBox onInput={handleInput}></SearchBox>
      <div className="CourseCards-container">{courseListJSX}</div>;
    </>
  );
};
export default CourseList;
