import React from 'react'
import img from '../Images/Map_Card1.jpg';

export default function Card1() {
  return (
    <>
        <div class="card mb-3 map-card rounded-start card-main">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={img} class="img-fluid rounded-start map-img" alt="..."/>
                </div>
                <div class="col-md-8">
                     <div className='card-side'>
                        <p className='text-muted text-end'>City:<span className='text-light'> Maharashtra </span>
                        <span className='text-muted text-end'>  State:<span className='text-light'> Wadgaon Road</span></span></p>
                    </div>
                    <div class="card-main-body">
                        <p className='text-muted'>Ride ID:<span className='text-light'> 616</span></p>
                        <p className='text-muted'>Origin Station:<span className='text-light'> 11</span></p>
                        <p className='text-muted'>station_path:<span className='text-light'> [33,43,59,61,78,84]</span></p>
                        <p className='text-muted'>Date:<span className='text-light'> 02/23/2022 10:15 AM</span></p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
