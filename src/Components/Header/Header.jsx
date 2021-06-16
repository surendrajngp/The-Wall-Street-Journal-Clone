import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="Header bg-white">
      <div className="container">
        <div className="header-top d-flex justify-content-center align-items-center">
          <div className="col-12">
            <h1 className=" h2 Logo-heading m-0 text-center">
              <a href="">THE WALL STREET JOURNAL</a>
            </h1>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white pt-0">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    World
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    U.S.
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Poliics
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Economy
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Business
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Tech
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Markets
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Opinion
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Life & Arts
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Real Estate
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    WSJ Magzine
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
