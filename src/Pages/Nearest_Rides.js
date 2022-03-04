import React from 'react'
import Navbar from '../Components/Navbar'
import Navbar2 from '../Components/Navbar2'
import Card from '../Components/Card/Card'
import Card1 from '../Components/Card/Card1'
import Card2 from '../Components/Card/Card2'
import'../style.css'

export default function Nearest_Rides() {
  return (
    <div className='body'>
        <Navbar/>
        <Navbar2/>
        <Card/>
        <Card1/>
        <Card2/>
    </div>
    
  )
}
