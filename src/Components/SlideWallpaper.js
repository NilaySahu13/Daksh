import React from 'react'
import Navbar from './Navbar'
import img1 from './../img1.jpg'
import img2 from './../img2.jpg'
import img3 from './../img3.jpg'
import img4 from './../img4.jpg'
import img5 from './../img5.jpg'

export default function SlideWallpaper() {
  return (
    <>
        
      <div id="mbody">
      <div id="nav">
        <Navbar/>
      </div>
      <div id="carouselExample" className="carousel slide">
            
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={img1} className="d-block w-100 h-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={img2} className="d-block w-100 h-60" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={img3} className="d-block w-100 h-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={img4} className="d-block w-100 h-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={img5} className="d-block w-100 h-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
      </div>
      
      </div>
    </>
  )
}

