import React from 'react'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-2 px-5">
  <div className="container-fluid">
    <a className="navbar-brand success" style={{color: 'green'}} href="/"><i>Daksh</i></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/" aria-current="page" >
            Contact
          </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/">About</a>
        </li>
      </ul>
      <>
        <a className="btn btn-outline-success" href="/">Login</a>
      </>
    </div>
  </div>
</nav>
    </>
  )
}
