import React from 'react'
import img1 from './../instagram.svg'
import img2 from './../linkedin.svg'
import img3 from './../twitter.svg'

export default function Footer() {
  return (
    <div>
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            {/* <h1>hello</h1> */}
            {/* <button className="btn btn-outline-success"></button> */}
            <div className='px-4'> &#169; All Right Reserved to <i style={{color:'green'}}>Daksh </i></div>
            <div>
                <a className='px-2' href="/"><img src={img2} alt="" /></a>
                <a className="px-2" href="/"><img src={img1} alt="" /></a>
                <a className='px-2' href="/"><img src={img3} alt="" /></a>
            </div>
        </div>
        </nav> 
    </div>
  )
}
