import React from 'react';
import './header.css';
import logo from '../../images/logo.png';
const Header = ()=> {
 
 
 return (
  <div className='header'>
   <img src={logo} alt="Our Courses" />
   <div className='nav'>
    <ul>
     <li><a href='/'>Home</a></li>
     <li><a href='/courses'>Courses</a></li>
     <li><a href="/review">Course Review</a></li>
    </ul>
   </div>
  </div>
 );
 
}
export default Header;