import React from 'react'
import img from '../Images/Map_Card2.jpg';

export default function Card2() {
  return (
    <>
        <div class="card mb-3 map-card rounded-start card-main">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={img} class="img-fluid rounded-start map-img" alt="..."/>
                </div>
                <div class="col-md-8">
                    <div className='card-side'>
                        <p className='text-muted text-end'>City:<span className='text-light'> Kerala </span>
                        <span className='text-muted text-end'>  State:<span className='text-light'> Vaikom</span></span></p>
                    </div>
                    <div class="card-main-body">
                        <p className='text-muted'>Ride ID:<span className='text-light'> 151</span></p>
                        <p className='text-muted'>Origin Station:<span className='text-light'> 18</span></p>
                        <p className='text-muted'>station_path:<span className='text-light'> [34,44,56,66,71,80]</span></p>
                        <p className='text-muted'>Date:<span className='text-light'> 12/24/2021 12:33 PM</span></p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
