import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <div>
        {" "}
        <a className="title">_courseology</a>{" "}
      </div>
      <Link className="nav-menu__item" to="/new-course">
        {" "}
        add a new course
      </Link>
    </nav>
  );
};

export default Nav;
