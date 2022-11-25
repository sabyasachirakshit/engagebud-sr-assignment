import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  var email;
  const [content, setContent] = useState("Test Your Luck Now");
  const navigate = useNavigate();
  function validateEmail(email) {
    const pattern =
      /[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/g;
    const result = pattern.test(email);
    return result;
  }
  function clickHandler(e) {
    e.preventDefault();
    email = document.getElementById("email").value;
    let emailValid = validateEmail(email);
    if (emailValid === false) {
      alert("Wrong Email");
      navigate("/");
    } else {
      setContent("Loading...");
      setTimeout(() => {
        navigate("/spinWheel");
      }, 2000);
    }
  }
  useEffect(() => {
    fetch(
      "https://restlessmonks.notion.site/Assignment-Frontend-Engineer-Engagebud-197d617a5f3c49aaaa4f11054b8dace3",
      {
        // Sending data to dummy API
        method: "POST",
        mode: "cors",
        body: JSON.stringify(email), // body data type must match "Content-Type" header
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="d-flex m-2 p-2 flex-column" style={{ maxWidth: "300px" }}>
      <div className="row flex-sm-column">
        <h1>EngageBud Assignment</h1>
        <form>
          <div className="mb-3">
            <label className="from-label">Email</label>
            <input
              type="email"
              id="email"
              placeholder="user@mail.com"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="from-label">Phone Number</label>
            <input
              type="phone number"
              placeholder="+91-"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input type="checkbox" className="form-check-input m-1" required />
            <label className="from-label">
              I agree to the terms and conditions
            </label>
          </div>
          <button
            onClick={clickHandler}
            type="submit"
            className="btn btn-success"
          >
            {content}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
