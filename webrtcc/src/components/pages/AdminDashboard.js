import React from "react";
import { Routes, Route } from "react-router-dom";
import ResponsiveDrawer from "./SideBar";
import PatientListView from "./patients/PatientsListView";
import DoctorsListView from "./doctors/DoctorsListView";
import AdminsListView from "./admins/AdminsListView"
import AppointmentsListView from "./appointment/AppointmentsListView"
import Typography from "@mui/material/Typography";

function AdminDashboard() {
  return (
    <ResponsiveDrawer>
      <Routes>
        <Route path="patient-list" element={<PatientListView />} />
        <Route path="doctors-list" element={<DoctorsListView />} />
        <Route path="admin-list" element={<AdminsListView />} />
        <Route path="appointments-list" element={<AppointmentsListView />} />
        <Route path="/" element={<Typography paragraph>Welcome to the Admin Dashboard.</Typography>} />
      </Routes>
    </ResponsiveDrawer>
  );
}

export default AdminDashboard;
