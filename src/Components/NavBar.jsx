import React from 'react'

const NavBar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary"  data-bs-theme='dark'>
    <div className="container-fluid">
      <a className="navbar-brand" href="#"> <span className='badge fs-5 bg-light text-dark'>News Map</span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        
        <li className='nav-item'>
               <div className='nav-link' onClick={() => setCategory('sport')}>Sport</div>
        </li>
        <li className='nav-item'>
               <div className='nav-link'  onClick={() => setCategory('technology')}>Technology</div>
        </li>
        <li className='nav-item'>
               <div className='nav-link'  onClick={() => setCategory('health')}>Health</div>
        </li>
         
        </div>
      </div>
    </div>
  </nav>
  )
}
  //27990941e2244f7c86f9edd9b6042918
export default NavBar
