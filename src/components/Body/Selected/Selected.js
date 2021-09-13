import React from 'react';
import './selected.css'
const Selected = (props)=> {
 const selected = props.selected;
 let total = selected.reduce((total,course)=> total+ course.fee, 0);
 let vat = (total/100)*5;
 vat = parseFloat(vat.toFixed(2));
 return (
  <div>
  <div className='selected-container'>
   <p>Selected Courses: {selected.length}</p>
   <p><small>Cost: ${total}</small></p>
   <p><small>VAT: {vat}</small></p>
   <p><small className='total'>Total: ${total+vat}</small></p>
  </div>
   <button><a href="/review">Review Course</a></button>
  </div>
  )
 
}
export default Selected;