import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Employee } from './page/Employee'
import { TaskTracker } from './component/TaskTracker'
import { EditPerson } from './page/EditPerson'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Employee />} />
    <Route path="/employee" element={<Employee />} />\
    <Route path="/edit-person" element={<EditPerson />} />
    <Route path="/task-tracker" element={<TaskTracker />} />
    <Route path="/task-tracker/:id" element={<TaskTracker />} />
    <Route path="/task-tracker/edit/:id" element={<TaskTracker />} />
     </Routes>
    </BrowserRouter>

    </>
  )
}
  

export default App
