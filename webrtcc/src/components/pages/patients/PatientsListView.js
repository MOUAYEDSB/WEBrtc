import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import PatientTable from "./PatientTable";
import PatientEditModal from "./PatientEditModal";
import PatientAddModal from "./PatientAddModal";

const PatientsListView = () => {
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [newPatient, setNewPatient] = useState({
    name: "",
    prnom: "",
    email: "",
    password: "",
    cin: "",
    phone: "",
    city: "",
  });

  const getPatients = async () => {
    try {
      const response = await axios.get("https://localhost:7081/api/patients", {
        withCredentials: true,
      });
      setPatients(response.data);
      setError(null);
    } catch (error) {
      setError("Error fetching patients. Please try again.");
      console.error("There was an error fetching the patient data!", error);
    }
  };

  const deletePatient = async (id) => {
    try {
      await axios.delete(`https://localhost:7081/api/patients/${id}`, {
        withCredentials: true,
      });
      setPatients(patients.filter((patient) => patient.id !== id));
      setError(null);
    } catch (error) {
      setError("Error deleting patient. Please try again.");
      console.error("There was an error deleting the patient!", error);
    }
  };

  const updatePatient = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://localhost:7081/api/patients/${selectedPatient.id}`,
        selectedPatient,
        {
          withCredentials: true,
        }
      );
      setPatients(
        patients.map((p) => (p.id === selectedPatient.id ? response.data : p))
      );
      setShowEditModal(false);
      setSelectedPatient(null);
      setError(null);
    } catch (error) {
      setError("Error updating patient. Please try again.");
      console.error("There was an error updating the patient!", error);
    }
  };

  const addPatient = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://localhost:7081/api/patients",
        newPatient,
        {
          withCredentials: true,
        }
      );
      setPatients([...patients, response.data]);
      setShowAddModal(false);
      setNewPatient({
        name: "",
        prnom: "",
        email: "",
        password: "",
        cin: "",
        phone: "",
        city: "",
      });
      setError(null);
    } catch (error) {
      setError("Error adding patient. Please try again.");
      console.error("There was an error adding the patient!", error);
    }
  };

  useEffect(() => {
    getPatients();
  }, []);

  const handleEditClick = (patient) => {
    setSelectedPatient(patient);
    setShowEditModal(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setSelectedPatient({ ...selectedPatient, [name]: value });
  };

  const handleAddModalClose = () => {
    setShowAddModal(false);
    setNewPatient({
      name: "",
      prnom: "",
      email: "",
      password: "",
      cin: "",
      phone: "",
      city: "",
    });
  };

  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setNewPatient({ ...newPatient, [name]: value });
  };

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <h2 style={{ color: "blue", textAlign: "center" }}>Patients List</h2>
      <div style={{ marginBottom: "10px", textAlign: "right" }}>
        <Button variant="success" onClick={() => setShowAddModal(true)}>
          Add Patient
        </Button>
      </div>
      <PatientTable
        patients={patients}
        onDelete={deletePatient}
        onEdit={handleEditClick}
      />
      <PatientEditModal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        patient={selectedPatient}
        onChange={handleEditChange}
        onSubmit={updatePatient}
      />
      <PatientAddModal
        show={showAddModal}
        onHide={handleAddModalClose}
        patient={newPatient}
        onChange={handleAddChange}
        onSubmit={addPatient}
      />
    </div>
  );
};

export default PatientsListView;
