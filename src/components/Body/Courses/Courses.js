import React from 'react';
import './courses.css';
const Courses = (props)=> {
 const {name, img, teacher, company, fee} = props.course;
 
 return (
  <div class="course-container">
   <img src={img} alt=""/>
   <div className="text-container">
    <div>
     <h2>{name}</h2>
     <h5>by {teacher}</h5>
     <p>{company}</p>
     <p><small>${fee}</small></p>
    </div>
    <div>
     <button onClick={()=> props.handleSelect(props.course)}>Enroll Now</button>
    </div>
   </div>
  </div>
  )
}
export default Courses;