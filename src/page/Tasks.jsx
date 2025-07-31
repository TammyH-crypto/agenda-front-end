import React from "react";
import { TaskTable } from "../component/TaskTable";
import { TaskForm } from "../component/TaskForm";

export const Tasks = () => {
  return (
    <>
      <TaskForm />
      <TaskTable />
    </>
  );
};
