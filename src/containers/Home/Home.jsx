import "./Home.scss";
import React from "react";
import ExploreCourses from "../../containers/ExploreCourses/ExploreCourses";

const Home = () => {
    
  return (
    
      <div className="home">
     {/*    <section className="explore"> */}
     
          <ExploreCourses></ExploreCourses>
     {/*    </section> */}
        {/* <h2>Find your next course</h2> */}
      </div>
   
  );
};
export default Home;
