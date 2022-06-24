import "./CoursesDetails.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const CoursesDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const getCourse = () => {
    fetch("http://localhost:8081/course/" + id)
      .then((res) => res.json())
      .then((json) => setCourse(json))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCourse();
  }, []);
  console.log(course);
  return (
    <>
      <div className="Container">
        <p className="CourseCards-section__title">{course.name}</p>
        <div className="CourseCards-section">
          <div className="details">
            <div className="details__location">
              <p className="details__location-title">{"Location: "} </p>

              <p className="details__location-content">{course.location}</p>
            </div>
            <div className="details__price">
              <p className="details__price-title">{"Price: "}</p>
              <p className="details__price-content">{course.price}</p>
            </div>

            <div className="details__duration">
              <p className="details__duration-title">{"Duration: "}</p>
              <p className="details__duration-content">{course.duration}</p>
            </div>
            <div className="details__summary">
              <p className="details__summary-title">{"Summary: "}</p>
              <p className="details__summary-content">{course.summary}</p>
            </div>
          </div>
        </div>
        <Link to="/">
          <button className="btn">Back to Search</button>
        </Link>
      </div>
    </>
  );
};

export default CoursesDetails;
