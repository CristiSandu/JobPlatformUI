import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { EditUserPage, UserCardParameter } from "./pages/EditUserPage";
import { LoginPage } from "./pages/LoginPage";
import { ProfileFormPage } from "./pages/ProfileFormPage";
import { RegisterPage } from "./pages/RegisterPage";

function App() {
  const elem: UserCardParameter[] = [
    {
      domain: "HoReCa",
      email: "ilie.cristian.sandu@gmail.com",
      gender: "M",
      type: "employee",
      name: "Sandu Ilie Cristian",
    },
    {
      domain: "Construction",
      email: "ilie.cristian.sandu@gmail.com",
      gender: "M",
      type: "employee",
      name: "Sandu Ilie Cristian",
    },
    {
      domain: "HoReCa",
      email: "ilie.cristian.sandu@gmail.com",
      gender: "M",
      type: "employee",
      name: "Sandu Ilie Cristian",
    },
    {
      domain: "IT",
      email: "ioana.popa@gmail.com",
      gender: "F",
      type: "employee",
      name: "Popa Ioana",
    },
    {
      domain: "HoReCa",
      email: "ilie.cristian.sandu@gmail.com",
      gender: "M",
      type: "employee",
      name: "Sandu Ilie Cristian",
    },
    {
      domain: "IT",
      email: "ioana.popa@gmail.com",
      gender: "F",
      type: "employee",
      name: "Popa Ioana",
    },
    {
      domain: "IT",
      email: "ilie.cristian.sandu@gmail.com",
      gender: "M",
      type: "employee",
      name: "Sandu Ilie Cristian",
    },
    {
      domain: "IT",
      email: "ioana.popa@gmail.com",
      gender: "F",
      type: "employee",
      name: "Popa Ioana",
    },
    {
      domain: "IT",
      email: "ilie.cristian.sandu@gmail.com",
      gender: "M",
      type: "employee",
      name: "Sandu Ilie Cristian",
    },
    {
      domain: "IT",
      email: "ioana.popa@gmail.com",
      gender: "F",
      type: "employee",
      name: "Popa Ioana",
    },
    {
      domain: "IT",
      email: "ilie.cristian.sandu@gmail.com",
      gender: "M",
      type: "employee",
      name: "Sandu Ilie Cristian",
    },
    {
      domain: "IT",
      email: "ioana.popa@gmail.com",
      gender: "F",
      type: "employee",
      name: "Popa Ioana",
    },
    {
      domain: "IT",
      email: "ilie.cristian.sandu@gmail.com",
      gender: "M",
      type: "employee",
      name: "Sandu Ilie Cristian",
    },
    {
      domain: "IT",
      email: "ioana.popa@gmail.com",
      gender: "F",
      type: "recruiters",
      name: "Popa Ioana",
    },
    {
      domain: "HoReCa",
      email: "ilie.cristian.sandu@gmail.com",
      gender: "M",
      type: "employee",
      name: "Sandu Ilie Cristian",
    },
  ];
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/profileForm" element={<ProfileFormPage />}></Route>
          <Route
            path="/EditUsers"
            element={<EditUserPage initialsElements={elem} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
