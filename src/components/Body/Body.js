import React, { useState,useEffect } from 'react';
import './body.css';
import Courses from './Courses/Courses';
import Selected from './Selected/Selected';
const Body = ()=> {
 const [courses, setCourses] = useState([]);
 useEffect(()=>{
  fetch('data.json')
  .then(res => res.json())
  .then(data => setCourses(data))
 },[])
 const [selected, setSelected] = useState([]);
 const handleSelect = courses => {
  const newSelected = [...selected, courses];
  setSelected(newSelected);
 };
 
 return (
  <div className='container'>
   <div>
    <div className='courses-container'>
     {
     courses.map(course => <Courses course={course} handleSelect={handleSelect}></Courses>)
     }
    </div>
   </div>
   <div>
    <Selected selected={selected} />
   </div>
  </div>
  )
 
}
export default Body;
