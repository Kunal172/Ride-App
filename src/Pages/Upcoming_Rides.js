import React from 'react'
import Navbar from '../Components/Navbar'
import Navbar2 from '../Components/Navbar2'
import Upcoming_Card from '../Components/Upcoming Card/Upcoming_Card'
import Upcoming_Card1 from '../Components/Upcoming Card/Upcoming_Card1'
import Upcoming_Card2 from '../Components/Upcoming Card/Upcoming_Card2'
import Upcoming_Card3 from '../Components/Upcoming Card/Upcoming_Card3'
import '../style.css'

export default function Upcoming_Rides() {
  return (
    <div className='body'>
        <Navbar/>
        <Navbar2/>
        <Upcoming_Card/>
        <Upcoming_Card1/>
        <Upcoming_Card2/>
        <Upcoming_Card3/>
    </div>
  )
}
