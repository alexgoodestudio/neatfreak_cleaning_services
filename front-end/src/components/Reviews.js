import React from "react"
import Footer from "./Footer"
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pic from "../components/Images/derrick-brooks-dqgVnnRzPio-unsplash.jpg"
import Chatbot from "./Chatbot"

function Reviews() {


  return (
    <div className="">
      <div className="row d-flex ms-2 me-2">
      <div className="col-lg-1 bg3">          </div>
        <div className="col-lg-4 bordReviews ">
          <div className="d-flex mt-4">
          </div>
          <div className="px-5">
            <div className="display-6 mb-2 d-flex"> Reviews</div>
            {/* <FontAwesomeIcon icon={['far', 'face-smile']} className=" increase2 me-5 d-flex ms-5" /> */}
          <figure className="mt-1">
            <hr></hr>

            <blockquote className=" ">
              <p>
                {" "}
                "Love NeatFreak Cleaning Services! They use awesome eco-friendly
                products and are super flexible with scheduling – my home's
                never looked better."
              </p>
            </blockquote>
            <figcaption className="blockquote-footer">
              review by: <cite title="Source Title">Karen R</cite>
            </figcaption>
          </figure>
          <hr></hr>
          <figure >
            <blockquote className="">
              <p>
                {" "}
                "I've been using NeatFreak Cleaning Services for a few months now, and it's been a game changer. Incredibly professional, and they do a thorough job every single time. "
              </p>
            </blockquote>
            <figcaption className="blockquote-footer">
              review by: <cite title="Source Title">Celia V</cite>
            </figcaption>
          </figure>
          <hr></hr>
          <figure >
            <blockquote className="">
              <p>
                {" "}
                "I booked a one-time cleaning service after a big party, and they made it spotless. Their attention to detail is impressive, and eco-friendly products makes me feel good about choosing them. Planning to set up a monthly cleaning schedule now. Highly recommend!"
                <Link to="/login" className="link marginNav text-light link-hover ">Employee Login</Link>
              </p>
            </blockquote>
            <figcaption className="blockquote-footer">
              review by: <cite title="Source Title">Alex G</cite>
            </figcaption>
          </figure>
          </div>
        </div>
        <div className="col-lg-6 bordReviews">
        <h1 className="display-6 text-dark mt-4">
          Neatfreak Cleaning Services
            </h1>
            <hr></hr>
            <p>
              Proudly Serving Richmond Virginia
            </p>
            <img src={pic} className="img-fluid p-0 mb-3 mt-1 "/>

        </div>
        <div className="col-lg-1 bg3">
        </div>
      </div>
   
   

      
  
        <Chatbot/>
    </div>
  )
}

export default Reviews;
