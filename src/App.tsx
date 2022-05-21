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
import { RoutesList } from "./util/constants";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path={RoutesList.Register} element={<RegisterPage />}></Route>
          <Route
            path={RoutesList.RegisterExtended}
            element={<ProfileFormPage />}
          ></Route>
          <Route path={RoutesList.UserAdmin} element={<EditUserPage />}></Route>
          <Route
            path={RoutesList.JobsAdmin}
            element={<CheckOffersPage />}
          ></Route>
          <Route
            path={RoutesList.ProfilePageAdmin}
            element={<ProfilePage isRecruiter={0} />}
          ></Route>
          <Route
            path={RoutesList.ProfilePage}
            element={<ProfilePage isRecruiter={1} />}
          ></Route>
          <Route
            path={RoutesList.HomePage}
            element={<UserOffersPage />}
          ></Route>
          <Route
            path={RoutesList.JobPageExtended}
            element={<JobPageExtended />}
          ></Route>
          <Route
            path={RoutesList.AddJobForm}
            element={<JobDescriptionFormPage />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
