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
import NotFound from "./components/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorFallback from "./components/ErrorFallback";
import SmallScreenCheck from "./components/SmallScreenCheck";

function Layout() {
  return (
    <>
      <Navbar />
      <SmallScreenCheck>
        <Outlet />
      </SmallScreenCheck>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary fallback={(error) => <ErrorFallback error={error} />}>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
