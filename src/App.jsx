import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Employee } from "./page/Employee";
import { Tasks } from "./page/Tasks";
import { EditPerson } from "./page/EditPerson";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Employee />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/edit-person/:id_person" element={<EditPerson />} />
          <Route path="/task-tracker/:employee_id" element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
