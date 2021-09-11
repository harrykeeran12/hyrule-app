import React from "react";
import './Navbar.css';

const Navbar = () => {
  return ( 
    <div>
      <ul className='Navbar'>
      <li><a href='/food'>Food</a></li>
      <li><a href='/nonfood'>Non Food</a></li>
      <li><a href='/monsters'>Monsters</a></li>
      </ul>
    </div>
   );
}
 
export default Navbar;