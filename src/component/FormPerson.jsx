import React, { useState } from "react";

const baseUrl = "https://tammy-backend.codex-p4-2025.click/api/";
const endPoint = "employees";

export const FormPerson = () => {
  const [newPerson, setNewPerson] = useState({
    name: "",
    department: "",
    role: "",
  });

  const submitHandler = async (event) => {
    event.preventDefault();

    const url = baseUrl + endPoint;
    const result = await fetch(url, {
      method: "POST",
      body: JSON.stringify(newPerson),
      headers: {
        "content-type": "application/json",
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
  return (
    <>
      <div>Person Form</div>
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
          <button className="btn btn-primary">New Employee</button>
          <button className="btn btn-secondary">Cancel</button>
        </form>
      </main>
    </>
  );
};
