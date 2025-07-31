import React from "react";
import { useEffect, useState } from "react";

const baseUrl = import.meta.env.VITE_BASE_URL;
const endPoint = "task";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const TaskForm = () => {
  const [task, setTasks] = useState([]);
  const [employee, setEmployees] = useParams().employee_id;
  const params = useParams;
};
const getTasks = async () => {
  const { employee_id } = params;
  const url = `${baseUrl}${endPoint}/${id}`;
  const result = await fetch(url);
  const data = await result.json();
  setTasks(data);
};
const deleteTask = async (id) => {
  const url = `${baseUrl}${endPoint}/${id}`;
  const result = await fetch(url, {
    method: "DELETE",
  });

  window.location.reload();
};  
useEffect(() => {
  getTasks();
}, []);

return (
  <>
    <table >
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