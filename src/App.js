import "./App.css";
import { Route, Routes } from "react-router";
import Repository from "./pages/Repository/RepositoryPage";
import SignUp from "./pages/SignUpPage/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Repository/>}/>
      <Route path="/login" element={<SignUp/>}/>
    </Routes>
  );
}

export default App;
