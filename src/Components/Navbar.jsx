import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Navbar({ fetchMovies, setSearchKey }) {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark py-3 shadow-sm">
          <div className="container-fluid">
            <Link className="navbar-brand fw-bold fs-4 text-light" to="/">
              <span className="atm">ATM</span>Cinema
            </Link>
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
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-light"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                {/* <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li> */}

                {/* <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li> */}

                <li className="nav-item">
                  <Link className="nav-link text-light" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>

              {/* <form className="form" onSubmit={fetchMovies}>
                    <input className="search" type="text" id="search"
                        onInput={(event) => setSearchKey(event.target.value)} />
                    <button className="submit-search" type="submit"><i className="fa fa-search"></i></button>
                </form> */}

              <div className="buttons">
                <Link to="/login" className="btn btn btn-outline-dark ">
                  <i className="fa-solid fa-right-to-bracket"></i> Login
                </Link>

                <Link to="/signup" className="btn btn btn-outline-dark ms-2">
                  <i className="fa-solid fa-user-plus"></i> Sign Up
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
