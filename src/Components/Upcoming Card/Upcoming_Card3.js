import React from 'react'
import img from '../Images/Map_Upcoming_Card3.jpg';

export default function Upcoming_Card3() {
  return (
    <div className='body'>
        <>
            <div class="card mb-3 map-card rounded-start card-main">
            <div class="row g-0">
                <div class="col-md-4">
                <img src={img} class="img-fluid rounded-start map-img" alt="..."/>
                </div>
                <div class="col-md-8">
                <div className='card-side'>
                    <p className='text-muted text-end'>City:<span className='text-light'> Giridih </span>
                    <span className='text-muted text-end'>  State:<span className='text-light'> Jharkhand</span></span></p>
                </div>
                <div class="card-body card-main-body">
                    <p className='text-muted'>Ride ID:<span className='text-light'> 583</span></p>
                    <p className='text-muted'>Origin Station:<span className='text-light'> 12</span></p>
                    <p className='text-muted'>station_path:<span className='text-light'> [27,34,45,58,67,78,84]</span></p>
                    <p className='text-muted'>Date:<span className='text-light'> 01/09/2022 03:45 AM</span></p>
                </div>
                </div>
            </div>
            </div>
        </>
    </div>
  )
}
