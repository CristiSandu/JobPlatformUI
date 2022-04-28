import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./pages/LoginPage";
import { ProfileFormPage } from "./pages/ProfileFormPage";
import { RegisterPage } from "./pages/RegisterPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/profileForm" element={<ProfileFormPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
