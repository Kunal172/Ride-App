import React from 'react'
import img from '../Images/Map_Card.jpg';

export default function Card() {
  return (
      <>
        <div class="card mb-3 map-card rounded-start card-main">
          <div class="row g-0">
            <div class="col-md-4">
              <img src={img} class="img-fluid rounded-start map-img" alt="..."/>
            </div>
            <div class="col-md-8">
              <div className='card-side'>
                <p className='text-muted text-end'>City:<span className='text-light'> Udhampur </span>
                <span className='text-muted text-end'>  State:<span className='text-light'> Jammu And Kashmir</span></span></p>
              </div>
              <div class="card-body card-main-body">
                <p className='text-muted'>Ride ID:<span className='text-light'> 555</span></p>
                <p className='text-muted'>Origin Station:<span className='text-light'> 19</span></p>
                <p className='text-muted'>station_path:<span className='text-light'> [47,59,69,77,88]</span></p>
                <p className='text-muted'>Date:<span className='text-light'> 12/19/2021 08:28 AM</span></p>
                {/* <p className='text-muted'>Distance:<span className='text-light'> 0</span></p> */}
              </div>
            </div>
          </div>
        </div>
      </>
  )
}
