import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const baseUrl = import.meta.env.VITE_BASE_URL;
const endPoint = "user";

export const RegisterForm = () => {
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    name: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const url = `${baseUrl}${endPoint}`;
    const result = await fetch(url, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await result.json();

    //window.location.reload();

    navigate("/employees");
  };

  return (
    <>
      <main className="container ml-2 mr-2 mb-5 mt-5">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              name="email"
              onChange={handleChange}
              value={form.email}
              type="email"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">User Name</label>
            <input
              name="username"
              onChange={handleChange}
              value={form.username}
              type="username"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              name="password"
              onChange={handleChange}
              value={form.password}
              type="password"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              name="name"
              onChange={handleChange}
              value={form.name}
              type="name"
              className="form-control"
            />
          </div>

          <button className="btn btn-success w-100">Register</button>
        </form>
      </main>
    </>
  );
};
