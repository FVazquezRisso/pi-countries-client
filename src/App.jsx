import { Routes, Route, useLocation } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import HomePage from "./pages/HomePage/HomePage";
import DetailPage from "./pages/DetailPage/DetailPage";
import FormPage from "./pages/FormPage/FormPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const location = useLocation().pathname;
  return (
    <>
      {location !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/detail/:idPais" element={<DetailPage />} />
        <Route path="/form/:countryName" element={<FormPage />} />
      </Routes>
    </>
  );
}

export default App;
