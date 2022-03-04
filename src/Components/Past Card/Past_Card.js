import React from 'react'
import img from '../Images/Map_Past_Card.jpg';

export default function Past_Card() {
  return (
    <>
        <div class="card mb-3 map-card rounded-start card-main">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={img} class="img-fluid rounded-start map-img" alt="..."/>
                </div>
                <div class="col-md-8">
                    <div className='card-side'>
                        <p className='text-muted text-end'>City:<span className='text-light'> Marmagao </span>
                        <span className='text-muted text-end'>  State:<span className='text-light'> Goa</span></span></p>
                    </div>
                    <div class="card-body card-main-body">
                        <p className='text-muted'>Ride ID:<span className='text-light'> 388</span></p>
                        <p className='text-muted'>Origin Station:<span className='text-light'> 7</span></p>
                        <p className='text-muted'>station_path:<span className='text-light'> [42,55,67,71,80]</span></p>
                        <p className='text-muted'>Date:<span className='text-light'> 01/07/2022 09:20 AM</span></p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
