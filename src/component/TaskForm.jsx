import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Employee } from "../page/Employee";

const baseUrl = import.meta.env.VITE_BASE_URL;
const endPoint = "task";

export const TaskForm = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { employee_id } = params;
  const [task, setTask] = useState({
    employee_id: employee_id,
    description: "",
    status: "",
  });

  const formHandler = (event) => {
    const inputTask = event.target.name;
    const inputValue = event.target.value;
    task[inputTask] = inputValue;
  };

  const submitHandler = async () => {
    event.preventDefault();
    const url = `${baseUrl}${endPoint}`;
    const token = localStorage.getItem("token");
    const result = await fetch(url, {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const data = await result.json();

    window.location.reload();
  };

  const returnHandler = () => {
    navigate("/employee");
  };

  return (
    <>
      <main className="container ml-2 mr-2 mb-5 mt-5">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label className="form-label">Task</label>
            <input
              name="description"
              onChange={formHandler}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Status</label>
            <input
              name="status"
              onChange={formHandler}
              type="text"
              className="form-control"
            />
          </div>

          <button className="btn btn-primary w-100">Save</button>
        </form>
        <button className="btn btn-warning mt-3 w-100" onClick={returnHandler}>
          Return
        </button>
      </main>
    </>
  );
};
