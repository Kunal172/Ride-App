import React from 'react'
import'../style.css'
import Nearest_Rides from '../Pages/Nearest_Rides'
import Upcoming_Rides from '../Pages/Upcoming_Rides'
import Past_Rides from '../Pages/Past_Rides'

export default function Home() {
  return (
    <>
      <div classname='body'>
        <Nearest_Rides/>
        <Upcoming_Rides/>
        <Past_Rides/>
      </div>
    </>
  )
}