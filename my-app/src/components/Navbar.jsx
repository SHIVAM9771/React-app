import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
// import './Navbar.css'; // Assuming you create a CSS file for custom styles

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} py-3 shadow-sm`}>
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold text-uppercase" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="#">Projects</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="#">{props.data.t1}</Link></li>
                  <li><Link className="dropdown-item" to="#">{props.data.t2}</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="#">{props.data.t3}</Link></li>
                </ul>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
            {/* <div className="d-flex">
              <div className="bg-primary rounded mx-2" onClick={props.toggleMode} style={{ height: '30px', width: '30px' }}></div>
            </div> */}
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
              <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                {props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}
              </label>
            </div>
            {/* <form className="d-flex search-bar">
              <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
              <button className={`btn btn-outline-success text-${props.mode === 'light' ? 'dark' : 'light'}`} type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  toggleMode: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: "My App",
  data: {
    t1: "Service 1",
    t2: "Service 2",
    t3: "Service 3"
  }
}
