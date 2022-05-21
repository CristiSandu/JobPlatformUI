import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { CheckOffersPage } from "./pages/CheckOffersPage";
import { EditUserPage } from "./pages/EditUserPage";
import { JobDescriptionFormPage } from "./pages/JobDescriptionFormPage";
import { JobPageExtended } from "./pages/JobPageExtended";
import { LoginPage } from "./pages/LoginPage";
import { ProfileFormPage } from "./pages/ProfileFormPage";
import { ProfilePage } from "./pages/ProfilePage";
import { RegisterPage } from "./pages/RegisterPage";
import { UserOffersPage } from "./pages/UserOffersPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/profileForm" element={<ProfileFormPage />}></Route>
          <Route path="/editUsers" element={<EditUserPage />}></Route>
          <Route path="/checkOffers" element={<CheckOffersPage />}></Route>
          <Route
            path="/profilePageAdmin"
            element={<ProfilePage isRecruiter={0} />}
          ></Route>
          <Route
            path="/profilePage"
            element={<ProfilePage isRecruiter={1} />}
          ></Route>
          <Route path="/profilePage1" element={<UserOffersPage />}></Route>
          <Route path="/profilePage2" element={<JobPageExtended />}></Route>
          <Route
            path="/jobDataForm"
            element={<JobDescriptionFormPage />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
