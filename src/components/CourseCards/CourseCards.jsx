import React from "react";
import "./CourseCards.scss";
import { Link, useNavigate } from "react-router-dom";

const CourseCards = (props) => {
  const { name, location, id, duration, onClick } = props;
  const navigator = useNavigate();
  const handleClick = () => {
    navigator("/course/" + id);
  };

  return (
    <Link to={"course/" + id}>
      <div className="Container">
        <p className="CourseCards-section__title">{name}</p>
        <p className="details__location-content">{location}</p>
      </div>
    </Link>
  );
};
export default CourseCards;
