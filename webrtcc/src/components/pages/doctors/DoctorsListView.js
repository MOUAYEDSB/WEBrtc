import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import DoctorTable from "./DoctorTable";
import DoctorEditModal from "./DoctorEditModal";
import DoctorAddModal from "./DoctorAddModal";

const DoctorsListView = () => {
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [newDoctor, setNewDoctor] = useState({
    name: "",
    prnom: "",
    email: "",
    password: "",
    cin: "",
    phone: "",
    city: "",
    batendees: "",
  });

  const getDoctors = async () => {
    try {
      const response = await axios.get("https://localhost:7081/api/doctors", {
        withCredentials: true,
      });
      setDoctors(response.data);
      setError(null);
    } catch (error) {
      setError("Error fetching doctors. Please try again.");
      console.error("There was an error fetching the doctor data!", error);
    }
  };

  const deleteDoctor = async (id) => {
    try {
      await axios.delete(`https://localhost:7081/api/doctors/${id}`, {
        withCredentials: true,
      });
      setDoctors(doctors.filter((doctor) => doctor.id !== id));
      setError(null);
    } catch (error) {
      setError("Error deleting doctor. Please try again.");
      console.error("There was an error deleting the doctor!", error);
    }
  };

  const updateDoctor = async (doctor) => {
    try {
      const response = await axios.put(
        `https://localhost:7081/api/doctors/${doctor.id}`,
        doctor,
        {
          withCredentials: true,
        }
      );
      console.log("Doctor updated successfully:", response.data);
      setDoctors(doctors.map((d) => (d.id === doctor.id ? response.data : d)));
      setShowEditModal(false);
      setError(null);
    } catch (error) {
      setError("Error updating doctor. Please try again.");
      console.error("There was an error updating the doctor!", error);
    }
  };

  const addDoctor = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://localhost:7081/api/doctors",
        newDoctor,
        {
          withCredentials: true,
        }
      );

      console.log(newDoctor);
      setDoctors([...doctors, response.data]);
      setShowAddModal(false);
      setNewDoctor({
        name: "",
        prnom: "",
        email: "",
        password: "",
        cin: "",
        phone: "",
        city: "",
        batendees: "",
      });
      setError(null);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        setError("Error adding doctor. Please check your inputs.");
      } else if (error.request) {
        console.log(error.request);
        setError("Error adding doctor. Please try again later.");
      } else {
        console.log("Error", error.message);
        setError("Error adding doctor. Please try again.");
      }
      console.error("There was an error adding the doctor!", error);
    }
  };

  useEffect(() => {
    getDoctors();
  }, []);

  const handleEditClick = (doctor) => {
    setSelectedDoctor(doctor);
    setShowEditModal(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setSelectedDoctor({ ...selectedDoctor, [name]: value });
  };

  const handleEditSubmit = (doctor) => {
    updateDoctor(doctor);
  };

  const handleAddModalClose = () => {
    setShowAddModal(false);
    setNewDoctor({
      name: "",
      prnom: "",
      email: "",
      password: "",
      cin: "",
      phone: "",
      city: "",
      batendees: "",
    });
  };

  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setNewDoctor({ ...newDoctor, [name]: value });
  };

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <h2 style={{ color: "blue", textAlign: "center" }}>Doctors List</h2>
      <div style={{ marginBottom: "10px", textAlign: "right" }}>
        <Button variant="success" onClick={() => setShowAddModal(true)}>
          Add Doctor
        </Button>
      </div>
      <DoctorTable
        doctors={doctors}
        onDelete={deleteDoctor}
        onEdit={handleEditClick}
      />
      <DoctorEditModal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        doctor={selectedDoctor}
        onChange={handleEditChange}
        onSubmit={handleEditSubmit}
      />
      <DoctorAddModal
        show={showAddModal}
        onHide={handleAddModalClose}
        doctor={newDoctor}
        onChange={handleAddChange}
        onSubmit={addDoctor}
      />
    </div>
  );
};

export default DoctorsListView;
