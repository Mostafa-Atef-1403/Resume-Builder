import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/Home/Dashboard";
import EditResume from "./pages/ResumeUpdate/EditResume";

const App = () => {
  return (
    <>
      <div className="">
        <BrowserRouter>
          <Routes>
            {/* homepage as the landing page */}
            <Route path="/" element={<LandingPage />} />

            {/* others */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/resume/:resumeId" element={<EditResume />} />
          </Routes>
        </BrowserRouter>
      </div>

      {/* Toaster */}
      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px",
          },
        }}
      />
    </>
  );
};

export default App;
