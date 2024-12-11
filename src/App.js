import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Admin from "./components/Admin";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import User from "./components/User";
import FillForm from "./components/FillForm";
import SubmitPage from "./components/SubmitPage";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Admin />} />
          <Route path="form" element={<Form />} />
          <Route path="form/:id" element={<Form />} />
          <Route path="user/:userId" element={<User />} />
          <Route path="user/:userId/:formId" element={<FillForm />} />
          <Route
            path="user/:userId/:formId/submitPage"
            element={<SubmitPage />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
