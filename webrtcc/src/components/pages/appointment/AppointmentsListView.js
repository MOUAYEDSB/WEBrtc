import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import AppointmentsTable from "./AppointmentsTable";
import AppointmentAddModal from "./AppointmentAddModal";
import AppointmentEditModal from "./AppointmentEditModal";

const AppointmentsListView = () => {
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState({});
  const [patients, setPatients] = useState({});
  const [error, setError] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newAppointmentData, setNewAppointmentData] = useState({
    appointmentDate: "",
    notes: "",
    doctorId: "",
    patientId: "",
  });
  const [editAppointmentData, setEditAppointmentData] = useState({
    id: "",
    appointmentDate: "",
    notes: "",
    doctorId: "",
    patientId: "",
  });

  const getAppointments = async () => {
    try {
      const response = await axios.get("https://localhost:7081/appointments", {
        withCredentials: true,
      });
      const fetchedAppointments = response.data;
      setAppointments(fetchedAppointments);

      const doctorIds = [...new Set(fetchedAppointments.map((a) => a.doctorId))];
      const patientIds = [...new Set(fetchedAppointments.map((a) => a.patientId))];

      await fetchDoctors(doctorIds);
      await fetchPatients(patientIds);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching appointments:", error);
    }
  };

  const fetchDoctors = async (doctorIds) => {
    const fetchedDoctors = {};
    await Promise.all(
      doctorIds.map(async (doctorId) => {
        try {
          const response = await axios.get(`https://localhost:7081/api/doctors/doctor/${doctorId}`, {
            withCredentials: true,
          });
          fetchedDoctors[doctorId] = response.data;
        } catch (error) {
          console.error(`Error fetching doctor data for ID ${doctorId}:`, error);
        }
      })
    );
    setDoctors(fetchedDoctors);
  };

  const fetchPatients = async (patientIds) => {
    const fetchedPatients = {};
    await Promise.all(
      patientIds.map(async (patientId) => {
        try {
          const response = await axios.get(`https://localhost:7081/patient/${patientId}`, {
            withCredentials: true,
          });
          fetchedPatients[patientId] = response.data;
        } catch (error) {
          console.error(`Error fetching patient data for ID ${patientId}:`, error);
        }
      })
    );
    setPatients(fetchedPatients);
  };

  const addAppointment = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://localhost:7081/api/appointments", newAppointmentData, {
        withCredentials: true,
      });
      setAppointments([...appointments, response.data]);
      setShowAddModal(false);
      setNewAppointmentData({
        appointmentDate: "",
        notes: "",
        doctorId: "",
        patientId: "",
      });
    } catch (error) {
      setError(error.message);
      console.error("Error adding appointment:", error);
    }
  };

  const deleteAppointment = async (id) => {
    try {
      await axios.delete(`https://localhost:7081/delteappointments?id=${id}`, {
        withCredentials: true,
      });
      setAppointments(appointments.filter((appointment) => appointment.id !== id));
    } catch (error) {
      setError(error.message);
      console.error("Error deleting appointment:", error);
    }
  };

  const updateAppointment = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://localhost:7081/updateappointments?id=${editAppointmentData.id}`, editAppointmentData, {
        withCredentials: true,
      });
      const updatedAppointments = appointments.map((appointment) =>
        appointment.id === editAppointmentData.id ? editAppointmentData : appointment
      );
      setAppointments(updatedAppointments);
      setShowEditModal(false);
      setEditAppointmentData({
        id: "",
        appointmentDate: "",
        notes: "",
        doctorId: "",
        patientId: "",
      });
    } catch (error) {
      setError(error.message);
      console.error("Error updating appointment:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointmentData({ ...newAppointmentData, [name]: value });
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditAppointmentData({ ...editAppointmentData, [name]: value });
  };

  const handleEditButtonClick = (appointment) => {
    setEditAppointmentData(appointment);
    setShowEditModal(true);
  };

  useEffect(() => {
    const getAppointments = async () => {
      try {
        const response = await axios.get("https://localhost:7081/api/appointments", {
          withCredentials: true,
        });
        const fetchedAppointments = response.data;
        setAppointments(fetchedAppointments);

        const doctorIds = [...new Set(fetchedAppointments.map((a) => a.doctorId))];
        const patientIds = [...new Set(fetchedAppointments.map((a) => a.patientId))];

        await fetchDoctors(doctorIds);
        await fetchPatients(patientIds);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching appointments:", error);
      }
    };

    getAppointments();

  }, []);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <h2 style={{ color: "blue", textAlign: "center" }}>Appointments List</h2>
      <div style={{ marginBottom: "10px", textAlign: "right" }}>
        <Button variant="success" onClick={() => setShowAddModal(true)}>
          Add Appointment
        </Button>
      </div>
      <AppointmentsTable
        appointments={appointments}
        onDelete={deleteAppointment}
        onEdit={handleEditButtonClick}
        doctors={doctors}
        patients={patients}
      />
      <AppointmentAddModal
        show={showAddModal}
        onHide={() => setShowAddModal(false)}
        onChange={handleInputChange}
        onSubmit={addAppointment}
        appointmentData={newAppointmentData}
      />
      <AppointmentEditModal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        onChange={handleEditInputChange}
        onSubmit={updateAppointment}
        appointmentData={editAppointmentData}
      />
    </div>
  );
};

export default AppointmentsListView;

