import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const baseUrl = "https://tammy-backend.codex-p4-2025.click/api/";
const endPoint = "employees";

export const TableEmployee = () => {
  const [employees, setEmployees] = useState([]);

  const navigate = useNavigate()

  const getEmployees = async () => {
    const url = `${baseUrl}${endPoint}`;
    const result = await fetch(url);
    const data = await result.json();
    setEmployees(data);
  };

  const handleEdit = async (id) => {
    navigate(`/edit-person/${id}`)
  };

  const handleDelete = async (id) => {
    const url = `${baseUrl}${endPoint}/${id}`;
    const result = await fetch(url, {
      method: "DELETE",
    });
    if (result.ok) {
      console.log("Employee deleted successfully");
      getEmployees();
    } else {
      console.error("Failed to delete employee");
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);
  console.log("employee data", employees);
  return (
    <>
      <h1>Employee Data Base </h1>

      <table>
        <thead>
          <tr>
            
            <th>Name</th>
            <th>department</th>
            <th>role</th>
            <th>Edit</th>
            <th>Delete</th>
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
                  className="btn btn-primary m-1"
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
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
