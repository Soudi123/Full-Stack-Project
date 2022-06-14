import "./ExploreCourses.scss"
import SearchBox from "../../components/SearchBox/SearchBox"
import CourseResults from "../../components/CourseResults/CourseResults";


const ExploreCourses =()=>{

    return (<>
    
    <div>
<SearchBox></SearchBox></div>
<section>
<CourseResults></CourseResults>
</section>



    </>);
};
export default ExploreCourses;