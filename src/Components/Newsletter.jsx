import React from "react";
import { Link } from "react-router-dom";

function Newsletter() {
  return (
    <>
      <div className="newsletter-container">
        <div className="container">
          <div className="newsletter-content">
            <div className="title">Bookings & Reservation Only</div>
            <div className="description">
              "Having a private experience with your friends, family or even
              colleagues. Rent out one of our spaces for your birthdays, events
              and premieres"
            </div>
          </div>
          <div className="newsletter-form">
            <Link to={"contact"}>
              <button className="btn1 btn btn-outline-dark fw-bold fs-">
                Contact Us Now
              </button>
            </Link>
          </div>
        </div>
        <div className="pattern">
          <img
            src="https://www.filmhouseng.com/static/images/backgrounds/newsletter-bg.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Newsletter;
