import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom';

// in bootstrap there was fake links linke in line 21 there was only href="/" so it was not going to about so i changed to "/about"
// and in others too 
// although not changing to a = Link and href="to" also works fine
export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary  "data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="/about">{props.aboutText}</a>  
                
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            
          </div>
        </div>
      </nav>
  )
}

Navbar.propTypes={

    title:propTypes.string.isRequired, // .string tells that the title should be string when passed in navbar function if not then error
    aboutText:propTypes.string // isRequired tells that you must pass title in the function . bit in this case it will take set  the title here as it is defined default below
}

Navbar.defaultProps={  // if the props are not passed in Navbar function then these will apply automatically
  title:"set title here",
  aboutText:"About"
};

