import React from 'react'
import img from '../Images/Map_Upcoming_Card1.jpg';

export default function Upcoming_Card1() {
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
                <p className='text-muted text-end'>City:<span className='text-light'> Karnataka </span>
                <span className='text-muted text-end'>  State:<span className='text-light'> Ranibennur</span></span></p>
              </div>
              <div class="card-body card-main-body">
                <p className='text-muted'>Ride ID:<span className='text-light'> 788</span></p>
                <p className='text-muted'>Origin Station:<span className='text-light'> 14</span></p>
                <p className='text-muted'>station_path:<span className='text-light'> [62,73,86]</span></p>
                <p className='text-muted'>Date:<span className='text-light'> 01/25/2022 06:09 AM</span></p>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  )
}
