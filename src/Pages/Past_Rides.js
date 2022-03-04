import React from 'react'
import Navbar from '../Components/Navbar'
import Navbar2 from '../Components/Navbar2'
import Past_Card from '../Components/Past Card/Past_Card'
import Past_Card1 from '../Components/Past Card/Past_Card1'
import '../style.css'

export default function Past_Rides() {
  return (
    <div className='body'>
        <Navbar/>
        <Navbar2/>
        <Past_Card/>
        <Past_Card1/>
    </div>
  )
}
