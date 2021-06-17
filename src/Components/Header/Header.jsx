import React from "react";
import "./Header.css";
import { links } from "./links";
const Header = () => {
  return (
    <div className="Header bg-white py-2 py-sm-0">
      <div className="container">
        <div className="header-top d-flex justify-content-center align-items-center">
          <div className="col-12">
            <h1 className=" h2 Logo-heading m-0 text-center d-none d-lg-block">
              <a href="">THE WALL STREET JOURNAL</a>
            </h1>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white pt-0">
          <div className="container-fluid">
            <a
              className="navbar-brand d-lg-none"
              style={{ fontSize: "30px", fontWeight: "bold" }}
              href="#"
            >
              WSJ
            </a>
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
                {links.map((link, key) => {
                  return (
                    <li className="nav-item" key={key}>
                      <a
                        className={key === 0 ? "nav-link active" : "nav-link"}
                        aria-current="page"
                        href={link.url}
                      >
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
