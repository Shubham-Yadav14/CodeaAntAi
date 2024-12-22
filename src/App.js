import "./App.css";
import { Route, Routes } from "react-router";
import LandingPage from "./components/HomepageComponents/LandingPage";
import SignUp from "./pages/SignUpPage.jsx/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/login" element={<SignUp/>}/>
    </Routes>
  );
}

export default App;
