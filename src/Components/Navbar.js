import React from 'react';
import img from '../Components/Images/Profile_Picture.jpg'
import '../style.css';

export default function Navbar() {
  return (
<nav class="navbar navbar-expand-lg navbar-dark navbar-main">
<div class="container-fluid">
  <a class="navbar-brand edvora" href="/">Edvora</a>
  <h5 className='navbar-brand username text-end'>
        Dhuruv singh
    </h5>
  <div class="text-end username-img">
            <img src={img} alt="Profile-Picture" width="32" height="32" class="rounded-circle"/>
        </div>
</div>
</nav>
  )
}
