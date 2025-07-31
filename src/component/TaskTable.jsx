import React from "react";
import { useEffect, useState } from "react";

const baseUrl = import.meta.env.VITE_BASE_URL;
const endPoint = "tasks";

export const TaskTable = async (req, res) => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const url = `${baseUrl}${endPoint}/tasks`;
    const result = await fetch(url);
    const data = await result.json();
    setTasks(data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <h1>Task Table</h1>
    </>
  );
};
