import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Employee } from "./page/Employee";
import { Tasks } from "./page/Tasks";
import { EditPerson } from "./page/EditPerson";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./page/Home";
import { Menu } from "./component/Menu";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const validateToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
  };
  useEffect(() => {
    validateToken();
  }, []);

  return (
    <>
      <BrowserRouter>
        {isLogin && <Menu auth={setIsLogin} />}
        <Routes>
          <Route path="/" element={<Home auth={setIsLogin} />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/edit-person/:id_person" element={<EditPerson />} />
          <Route path="/task-tracker/:employee_id" element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
