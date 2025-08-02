import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const baseUrl = import.meta.env.VITE_BASE_URL;
const endPoint = "task";
const endPoint2 = "employees";
import { useParams } from "react-router-dom";

export const TaskTable = () => {
  const params = useParams;

  const [task, setTasks] = useState([]);
  const [employee, setEmployees] = useState({});
};
const getTasks = async () => {
  const { employee_id } = params;
  const url = `${baseUrl}${endPoint}/${employee_id}`;
  const token = localStorage.getItem("token");
  const result = await fetch(url, {
    headers: {
      Authorization: token,
    },
  });
  const data = await result.json();
  setTasks(data);
};
const deleteTask = async (id) => {
  const url = `${baseUrl}${endPoint}/${id}`;
  const result = await fetch(url, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });

  window.location.reload();

  useEffect(() => {
    getTasks();
    getEmployee();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>{employee}</th>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {task.map((task) => (
            <tr key={employee.employee_id}>
              <td>{task}</td>
              <td>
                <button
                  className="btn btn-caution"
                  onClick={() => deleteTask(item.task)}
                ></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
