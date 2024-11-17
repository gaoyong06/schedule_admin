import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ScheduleManagement from "./pages/ScheduleManagement";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/schedule" element={<ScheduleManagement />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
