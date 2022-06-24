import "./Home.scss";
import { useState, useEffect } from "react";
import React from "react";
import ExploreCourses from "../../containers/ExploreCourses/ExploreCourses";
import CourseList from "../CourseList/CourseList";
import CourseCards from "../../components/CourseCards/CourseCards";
import Nav from "../../components/Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "../../components/Form/Form";
import CoursesDetails from "../../components/CoursesDetails/CoursesDetails";

const Home = () => {
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
  return (
    <Router>
      <div className="home">
        <Nav />
        <Routes>
          <Route path="/new-course" element={<Form />}></Route>

          <Route path="/" element={<CourseList />}></Route>

          <Route path="/course/:id" element={<CoursesDetails />}></Route>
        </Routes>
      </div>
    </Router>
  );
};
export default Home;
