import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./components/Admin";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import User from "./components/User";
import FillForm from "./components/FillForm";
import SubmitPage from "./components/SubmitPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/form" element={<Form />} />
        <Route path="/form/:id" element={<Form />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/user/:userId/:formId" element={<FillForm />} />
        <Route path="/user/:userId/:formId/submitPage" element={<SubmitPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
