import { useState } from "react";
import "./Form.scss";

// form styles jacked from here
// https://codepen.io/banunn/pen/AFnal

const Form = () => {
  const [courses, setCourses] = useState({
    name: "",
    location: "",
    price: 0.0,
    duration: 0,
    summary: "",
  });

  const handleSubmit = (e) => {
    console.log(courses);
    e.preventDefault();
    fetch("http://localhost:8081/course", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courses),
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
    e.target.reset();
  };

  return (
    <div className="log-form">
      <h2 className="title">Add A New Course</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name: "
          onInput={(e) => setCourses({ ...courses, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="location: "
          onInput={(e) => setCourses({ ...courses, location: e.target.value })}
        />
        <input
          type="text"
          placeholder="duration: "
          onInput={(e) =>
            setCourses({ ...courses, duration: parseInt(e.target.value) })
          }
        />
        <input
          type="text"
          placeholder="Price: "
          onInput={(e) =>
            setCourses({ ...courses, price: parseFloat(e.target.value) })
          }
        />
        <input
          type="text"
          placeholder="summary: "
          onInput={(e) => setCourses({ ...courses, summary: e.target.value })}
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
