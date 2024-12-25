import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import NotificationsPage from "./pages/NotificationsPage";
import AppointmentsPage from "./pages/AppointmentsPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import PatientDashboard from "./pages/PatientDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/notifications" element={<NotificationsPage />} />
                <Route path="/appointments" element={<AppointmentsPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                
                {/* Dashboard routes */}
                <Route path="/patient-dashboard" element={<PatientDashboard />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
