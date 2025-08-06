import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const baseUrl = import.meta.env.VITE_BASE_URL;
const endPoint = "register";

export const RegisterForm = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault()
    const url = `${baseUrl}${endPoint}`;
    const result = await fetch(url, {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
  }})
    const data = await result.json();

    window.location.reload();
  
  return (
    <>
      <main className="container ml-2 mr-2 mb-5 mt-5">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              name="name"
              onChange={handleChange}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              name="email"
              onChange={formHandler}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              name="password"
              onChange={formHandler}
              type="text"
              className="form-control"
            />
          </div>

          <button className="btn btn-danger w-100">Register</button>
        </form>
       
      </main>
    </>
  );
};

}