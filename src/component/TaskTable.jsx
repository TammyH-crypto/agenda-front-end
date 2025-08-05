import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const baseUrl = import.meta.env.VITE_BASE_URL;
const endPoint = "task";
const endPoint2 = "employees";

export const TaskTable = () => {
  const params = useParams();

  const [task, setTasks] = useState([]);

  const getTasks = async () => {
    const { employee_id } = params;
    const url = `${baseUrl}${endPoint}/${employee_id}`;
    const token = localStorage.getItem("token");
    const result = await fetch(url, {
      headers: {
        'Authorization': token,
      },
    });
    const data = await result.json();
    setTasks(data);
  };
  const deleteTask = async (id) => {
    const url = `${baseUrl}${endPoint}/${id}`;
    const token = localStorage.getItem("token");
    const result = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    });

    window.location.reload();
  };
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {task.map((task) => (
            <tr key={task.task_id}>
              <td>{task.description}</td>
              <td>{task.status}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => deleteTask(task.task_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
