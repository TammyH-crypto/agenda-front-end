import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Employee } from "../page/Employee";

const baseUrl = import.meta.env.VITE_BASE_URL;
const endPoint = "task";

export const TaskTable = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { employee_id } = params;
  const [task, setTask] = useState({
    employee_id: employee_id,
    task: "",
  });

  const formHandler = (event) => {
    const inputTask = event.target.task;
    const inputValue = event.target.value;
    task[inputTask] = inputValue;
  };

  const submintHandler = async () => {
    event.preventDefault();
    const url = `${baseUrl}${endPoint}`;
    const result = await fetch(url, {
      method: "POST",
      body: JSON.stringify([task, employee_id]),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await result.json();

    window.location.reload();
  };

  const returnHandler = () => {
    navigate("/task/employee_id");
  };

  return (
    <>
      <main className="container ml-2 mr-2 mb-5 mt-5">
        <form onSubmit={submintHandler}>
          <div className="mb-3">
            <label className="form-label">Task</label>
            <input
              name="task"
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
