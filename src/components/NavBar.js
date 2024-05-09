import React from "react";
import { Link,useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const logout = () =>{
    localStorage.clear();
    navigate("/signup")
  }

    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-secondary ">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/"> Global News </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {/* <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                  </li> */}
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    News Categories
                    </Link>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/">General</Link></li>
                      <li><Link className="dropdown-item" to="/products">Business</Link></li>
                      <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                      <li><Link className="dropdown-item" to="/health">Health</Link></li>
                      <li><Link className="dropdown-item" to="/science">Science</Link></li>
                      <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                      <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                    </ul>
                  </li>
          
                <li className="nav-item">
                  {auth ? <Link onClick={logout} to="/signup" className="nav-link">Logout</Link> : <Link className="nav-link" to="/signup">Register</Link>}
                </li>
              </ul>
              
            </div>
          </div>
        </nav>
        
      </div>
    )
}

export default NavBar;
