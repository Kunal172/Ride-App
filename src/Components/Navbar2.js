import React from 'react'
import '../style.css'

export default function Navbar2() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark navbar-2"> <button className="navbar-toggler" type="button" data-target="#navigation"> <span className="navbar-toggler-icon"></span> </button>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
                <li className="nav-item"> <a href="/Nearest-Rides" className="nav-link"> Nearest Rides </a> </li>
                <li className="nav-item"> <a href="/Upcoming-Rides" className="nav-link"> Upcoming Rides (4) </a> </li>
                <li className="nav-item"> <a href="Past-Rides" className="nav-link"> Past Rides (2) </a> </li>
            </ul>
        </div>
        <div className="dropdown main-dropdown">
          <button className="btn text-light" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAR0lEQVRIiWNgGAUDDRiROf///9dlYGDwotDMbYyMjJdhHBYsCgQptGAUjDRASTJFSY64wGgyHQWUA2KTKVFJEhsYTaYjAAAAW74PQ7FfGVYAAAAASUVORK5CYII="/>
            Filters
          </button>
          <ul className="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton1">
            <li className='dropdown-main-list'>
              <button className="btn dropdown-toggle text-light" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                State
              </button>
            </li>
            <li>
              <button className="btn dropdown-toggle text-light" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                City
              </button>
            </li>
          </ul>
        </div>
    </nav>
  )
}
