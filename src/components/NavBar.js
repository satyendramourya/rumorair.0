
import React from 'react'
import {
  Link
} from "react-router-dom";


export default function  NavBar(props){

    return (
      <nav className={`navbar navbar-expand-lg bg-${/*this.*/props.backgraoundColor} text-${/*this.*/props.color}`}>
        <div className="container-fluid">
          <a className={`navbar-brand text-${/*this.*/props.color}`} href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link text-${/*this.*/props.color}`} aria-current="page" to="/">Home</Link>
              </li>
               
              <li className="nav-item">
                <Link className={`nav-link text-${/*this.*/props.color}`} to="/sports">sports</Link>
              </li> 
              <li className="nav-item">
                <Link className={`nav-link text-${/*this.*/props.color}`} to="/health">health</Link>
              </li>  
              <li className="nav-item">
                <Link className={`nav-link text-${/*this.*/props.color}`} to="/science">science</Link>
              </li> 
              <li className="nav-item">
                <Link className={`nav-link text-${/*this.*/props.color}`} to="/business">business</Link>
              </li> 
              <li className="nav-item">
                <Link className={`nav-link text-${/*this.*/props.color}`} to="/entertainment">entertainment</Link>
              </li> 
              <li className="nav-item">
                <Link className={`nav-link text-${/*this.*/props.color}`} to="/technology">technology</Link>
              </li> 
              <li className="nav-item">
                {/* <Link className={`nav-link text-${this.props.color}`} to="/about">About</Link> */}
              </li>
            </ul>
          </div>

          <div className="form-check form-switch">
            <input className="form-check-input" onClick={/*this.*/props.toogleMode} type="checkbox" id="flexSwitchCheckChecked" />
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked"  > <strong><small>Dark-mode</small> </strong> </label>
          </div>
        </div>
      </nav>
    )
}

