import React from "react";
import { Link } from "react-router-dom";
import Image6 from "./Images/Screenshot 2023-12-30 at 11.16.18 PM.png";
import "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Dashboard() {


  return (
 

        <div>
          <div className="fadeout">
            <div className="innerColumn d-flex justify-content-center align-items-center">
              <h1 className="display-6">
                <span className="italics">Clean&nbsp;</span>Space,&nbsp;
                <span className="underline">Happy Mind</span>
              </h1>
            </div>
          </div>
          <div className="fadein">
            <div className="slide-in row gx-0">
              <div className="col-lg-6 mt-3 blue2">
                <div className="text-container d-flex justify-content-center align-items-center">
                  <div>
                    <h1 className="display-6">
                      <span className="italics2">Clean&nbsp;</span>Space,&nbsp;
                      <span className="underline">Happy Mind</span>
                    </h1>
                    <h4 className="thin">Let us handle the cleaning</h4>
                    <div className="mt-4">
                      <Link to="/request" className="btn2 mt-2">
                        <span className="bold">Request&nbsp;</span>
                        <span className="spacing1"> Estimate</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img src={Image6} className="img-fluid bathroom" alt="..." />
              </div>
            </div>
          </div>
        </div>

  );
}

export default Dashboard;
