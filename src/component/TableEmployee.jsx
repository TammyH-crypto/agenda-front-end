import React from "react";
import { useEffect, useState } from "react";

const baseUrl = "http://54.164.109.216:4000/api/";
const endPoint = "employees";

export const TableEmployee = () => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = async () => {
    const url = baseUrl + endPoint;
    const result = await fetch(url);
    const data = await result.json();
    setEmployees(data);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      <h1>Employee Data Base </h1>

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>department</th>
            <th>role</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.employee_id}>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.role}</td>
              <td>{employee.employee_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
