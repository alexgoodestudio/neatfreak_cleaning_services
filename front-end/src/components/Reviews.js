import React from "react";
import Footer from "./Footer";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import Chatbot from "./Chatbot";

function Reviews() {
  return (
    <div className="mx-4 text-dark">
      <div className="row d-flex ms-2 me-2 p-lg-5">
        <div className="col-lg-3 "> </div>
        <div className="col-lg-6">
          <div className="display-5 mt-5">
              <span className="italics ">Why Hire Us?</span>
       
            <hr ></hr>
          </div>
          <div>
          <p className="body p-sm-4">
            Choosing NeatFreak Cleaning Services means more than just having a
            clean home—it’s about reclaiming your time and peace of mind. We’re
            passionate about what we do. Our team takes the time to get to know your needs and
            pays attention to the little details that make a big difference.
            Whether you need a one-time deep clean or regular visits on a
            schedule that works for you, we’re here to make your life easier. At
            NeatFreak, we don’t just clean—we create a home you’ll love coming
            back to.
          </p>
           {/* <div className="px-lg-3 ">
            <figure className="mt-5">
              <blockquote className="">
                <p>
                  {" "}
                  "I've been using NeatFreak Cleaning Services for a few months
                  now, and they are incredibly professional and do a thorough
                  job every single time. "
                </p>
              </blockquote>
              <figcaption className="blockquote-footer">
                review by: <cite title="Source Title">Alex S</cite>
              </figcaption>
            </figure>
            <hr></hr>
            <figure>
              <blockquote className="">
                <p>
                  {" "}
                  "I booked a one-time cleaning service after a supper party, and they
                  made it spotless. Attention to detail is impressive. Planning
                  to set up a monthly cleaning schedule."
                  <Link
                    to="/neatfreak/login"
                    className="link marginNav text-light link-hover "
                  >
                    Employee Login
                  </Link>
                </p>
              </blockquote>
              <figcaption className="blockquote-footer">
                review by: <cite title="Source Title">Gertie G </cite>
              </figcaption>
            </figure>
          </div>  */}
                      <Link
                    to="/login"
                    className="link marginNav text-light link-hover "
                  >
                    Employee Login
                  </Link>
          </div>


        </div>
        <Footer />
        <div className="col-lg-3 "></div>
      </div>
      <Chatbot />
    </div>
  );
}

export default Reviews;
