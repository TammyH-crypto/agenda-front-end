import React, { useState } from "react";

const baseUrl = import.meta.env.VITE_BASE_URL;
const endPoint = "employees";

export const FormPerson = () => {
  const [newPerson, setNewPerson] = useState({
    name: "",
    department: "",
    role: "",
  });

  const submitHandler = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");
    const url = baseUrl + endPoint;
    const result = await fetch(url, {
      method: "POST",
      body: JSON.stringify(newPerson),
      headers: {
        "Content-Type": "application/json",
        'Authorization': token,
      },
    });

    const data = await result.json();
    console.log(data);

    window.location.reload();
  };

  const handlerName = (e) => {
    newPerson.name = e.target.value;
    setNewPerson(newPerson);
  };

  const handlerDepartment = (e) => {
    newPerson.department = e.target.value;
  };

  const handlerRole = (e) => {
    newPerson.role = e.target.value;
  };

  const handlerTask = (e) => {
    newPerson.role = e.target.value;
  };
  return (
    <>
      <h1>Person Form</h1>
      <main className="container ml-2 mr-2 mb-5">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              onChange={handlerName}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Department</label>
            <input
              onChange={handlerDepartment}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Role</label>
            <input
              onChange={handlerRole}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Task</label>
            <input
              onChange={handlerTask}
              type="text"
              className="form-control"
            />
          </div>

          <button className="btn btn-primary">Save</button>
        </form>
      </main>
    </>
  );
};
