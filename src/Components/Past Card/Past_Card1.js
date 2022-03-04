import React from 'react'
import img from '../Images/Map_Past_Card1.jpg';

export default function Past_Card1() {
  return (
    <>
        <div class="card mb-3 map-card rounded-start card-main">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={img} class="img-fluid rounded-start map-img" alt="..."/>
                </div>
                <div class="col-md-8">
                    <div className='card-side'>
                        <p className='text-muted text-end'>City:<span className='text-light'> Ganjbasoda </span>
                        <span className='text-muted text-end'>  State:<span className='text-light'> Madhya Pardesh</span></span></p>
                    </div>
                    <div class="card-body card-main-body">
                        <p className='text-muted'>Ride ID:<span className='text-light'> 945</span></p>
                        <p className='text-muted'>Origin Station:<span className='text-light'> 11</span></p>
                        <p className='text-muted'>station_path:<span className='text-light'> [44,58,65,77,86]</span></p>
                        <p className='text-muted'>Date:<span className='text-light'> 02/19/2022 05:19 PM</span></p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
