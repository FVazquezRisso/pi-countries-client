import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import HomePage from "./pages/HomePage/HomePage";
import DetailPage from "./pages/DetailPage/DetailPage";
import FormPage from "./pages/FormPage/FormPage";
import Navbar from "./components/Navbar/Navbar";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import ActivitiesPage from "./pages/ActivitiesPage/ActivitiesPage";
import EditActivityPage from "./pages/EditActivityPage/EditActivityPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import UserDetail from "./pages/UserDetail/UserDetail";

function App() {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const { allowAccess } = useSelector((state) => state);

  useEffect(() => {
    if (
      !allowAccess &&
      location !== "/" &&
      location !== "/register" &&
      location !== "/login"
    ) {
      navigate("/");
    }
  }, [allowAccess, location, navigate]);

  return (
    <>
      {location !== "/" &&
        location !== "/register" &&
        location !== "/login" && <Navbar />}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home/:id" element={<HomePage />} />
        <Route path="/detail/:idPais" element={<DetailPage />} />
        <Route path="/form/:countryName" element={<FormPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/edit/:activityId" element={<EditActivityPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:userId" element={<UserDetail />} />
      </Routes>
    </>
  );
}

export default App;
