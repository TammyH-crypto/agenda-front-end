import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tasks } from "../page/Tasks";

const baseUrl = import.meta.env.VITE_BASE_URL;
const endPoint = "employees";

export const TableEmployee = () => {
  const [employees, setEmployees] = useState([]);

  const navigate = useNavigate();

  const getEmployees = async () => {
    const url = `${baseUrl}${endPoint}`;
    const token = localStorage.getItem("token");
    const result = await fetch(url, {
      headers: {
        Authorization: token,
      },
    });
    const data = await result.json();
    setEmployees(data);
  };

  const handleEdit = async (id) => {
    navigate(`/edit-person/${id}`);
  };

  const handleDelete = async (id) => {
    const url = `${baseUrl}${endPoint}/${id}`;
    const token = localStorage.getItem("token");
    const result = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    });
    if (result.ok) {
      console.log("Employee deleted successfully");
      getEmployees();
    } else {
      console.error("Failed to delete employee");
    }
  };

  const handleAdd = async (id) => {
    navigate(`/task-tracker/${id}`);
  };

  useEffect(() => {
    getEmployees();
  }, []);
  console.log("employee data", employees);
  return (
    <>
      <h1 className=" p-5 text-success">Employee Data Base </h1>

      <table className="table table-striped border border-dark border-width ">
        <thead>
          <tr className="table-success">
            <th className="text-primary">Name</th>
            <th className="text-danger">department</th>
            <th className="text-info">role</th>
            <th className="text-dark">Edit</th>
            <th className="text-success">Delete</th>
            <th className="text-warning">Tasks</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.employee_id}>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.role}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-info m-1"
                  onClick={() => handleEdit(employee.employee_id)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger m-1"
                  onClick={() => handleDelete(employee.employee_id)}
                >
                  delete
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary m-1"
                  onClick={() => handleAdd(employee.employee_id)}
                >
                  Tasks
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
