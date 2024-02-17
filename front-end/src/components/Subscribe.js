import React from "react";
import { useState } from "react";
import "./Dashboard.css";
import { createEntry } from "../utils/api";
import { useNavigate } from "react-router-dom";
import ErrorAlert from "./ErrorAlert";
import Footer from "./Footer";
import Video from "./Video";
import Chatbot from "./Chatbot"

function Subscribe() {
  const history = useNavigate();

  function cancelAndReturn() {
    history(-1);
  }

  const keyValues = {
    name: "",
    email_address: "",
    service_type: "",
  };

  const [formData, setFormData] = useState(keyValues);
  const [error, setError] = useState(null);

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const abortController = new AbortController();
    try {
      await createEntry(formData, abortController.signal);
      // Reset formData to initial state after successful submission
      setFormData(keyValues);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>   
      <div className="row ">
        <Video />
          <div className="col-lg-3"></div>
        <div className="col-lg-6">
        <p className="   p-3 mt-5 para space2 lineHeight">
            Stay ahead in the game of cleanliness! Subscribe to our exclusive
            newsletter and receive monthly insights straight to your inbox.
            From expert cleaning hacks to eco-friendly solutions, we cover it
            all to help you maintain a sparkling home with ease. Plus, subscribers get first dibs on
            special offers and updates about our services. Sign up now and
            transform the way you clean!
          </p>
        
          <form className=" p-3" onSubmit={handleSubmit}>
            <ErrorAlert error={error} />

            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              className="form-control "
              type="text"
              onChange={handleChange}
              id="name"
              value={formData.name}
              name="name"
            />

            <label htmlFor="emailAddress" className="form-label mt-3">
              Email Address
            </label>
            <input
              className="form-control "
              type="text"
              onChange={handleChange}
              id="emailAddress"
              value={formData.email_address}
              name="email_address"
            />

            <div className="form-group">
              <label htmlFor="serviceType" className="form-label mt-3 w-100">
                How did you hear about us?
              </label>
              <select
                className="form-select  "
                id="serviceType"
                name="service_type"
                value={formData.service_type}
                onChange={handleChange}
              >
                <option value="Default">select an option</option>
                <option value="Google">Google</option>
                <option value="Facebook">Facebook</option>
                <option value="Instagram">Instagram</option>
                <option value="Friend">Friend</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <button type="submit" className="btn btn-outline-primary mt-4">
              Submit
            </button>
            <button
              className="btn btn-outline-secondary mt-4"
              onClick={cancelAndReturn}
            >
              Cancel
            </button>
          </form>

        </div>
        <div className="col-lg-3"></div>
      </div>

      <div className="row">
        <div className="col-lg-12 scaleDown">
          <Footer />
        </div>
      </div>
      <Chatbot/>
    </div>
  );
}

export default Subscribe;