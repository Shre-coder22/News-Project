import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Page.css";

export default function SignUp() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [mail, setMail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const collectData = async (e) => {
    console.log(name, mail, pass);
    e.preventDefault();
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, mail, pass }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let r = await result.json();
    console.warn(r);
    localStorage.setItem("user",JSON.stringify(r))
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              id="name1"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>E-Mail</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Name"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              id="mail1"
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Name"
              autoComplete="off"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 rounded-15"
            onClick={collectData}
          >
            Register
          </button>
        </form>
        <p>Already have an Account?</p>
        <Link
          className="btn btn-default border w-100 bg-light rounded-15 text-decoration-none"
          to="/login"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
