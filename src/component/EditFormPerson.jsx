import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const baseUrl = "https://tammy-backend.codex-p4-2025.click/api/";
const endPoint = "person";

export const EditFormPerson = () => {
  const navigate = useNavigate();

  const params = useParams();

  const [personEdit, setPersonEdit] = useState({
    name: "",
    department: "",
    role: "",
    task: "",
  });

  const formHandler = (event) => {
    const { name, value } = event.target;

    const temp = {
      name: personEdit.name,
      department: personEdit.department,
      role: personEdit.role,
      task: personEdit.task,
    };

    temp[name] = value;

    setPersonEdit(temp);
  };

  const getPersonById = async () => {
    const { id_person } = params;
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const endPoint = "person";
    const url = `${baseUrl}${endPoint}/${id_person}`;
    const token = localStorage.getItem("token");
    const result = await fetch(url, {
      headers: {
        Authorization: token,
      },
    });
    const data = await result.json();
    const element = data[0];

    const { name, department, role, task} = element;

    const temp = {
      name: name,
      department: "",
      role: "",
      task: "",
    };

    setPersonEdit(temp);
  };

  const submintHandler = async (event) => {
    event.preventDefault();

    const id_person = params.id_person;

    const url = `${baseUrl}${endPoint}/${id_person}`;

    const token = localStorage.getItem("token");

    const result = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(personEdit),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const data = await result.json();

    navigate("/person");
  };

  useEffect(() => {
    getPersonById();
  }, []);

  return (
    <>
      <h1>Edit Person</h1>

      <main className="container ml-2 mr-2 mb-5">
        <form onSubmit={submintHandler}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              name="name"
              onChange={formHandler}
              value={personEdit.name}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Department</label>
            <input
              name="department"
              onChange={formHandler}
              value={personEdit.department}
              className="form-control"
              type="text"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Role</label>
            <input
              name="role"
              onChange={formHandler}
              value={personEdit.role}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Task</label>
            <input
              name="task"
              onChange={formHandler}
              value={personEdit.task}
              type="text"
              className="form-control"
            />
          </div>

          <button className="btn btn-primary w-100">Save Data</button>
        </form>
      </main>
    </>
  );
};
