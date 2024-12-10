import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AppointmentAddModal = ({ show, onHide, onChange, onSubmit, appointmentData }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="formBasicAppointmentDate">
            <Form.Label>Appointment Date</Form.Label>
            <Form.Control
              type="date"
              name="appointmentDate"
              placeholder="Enter appointment date"
              value={appointmentData.appointmentDate}
              onChange={onChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicNotes">
            <Form.Label>Notes</Form.Label>
            <Form.Control
              type="text"
              name="notes"
              placeholder="Enter notes"
              value={appointmentData.notes}
              onChange={onChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicDoctorId">
            <Form.Label>Doctor ID</Form.Label>
            <Form.Control
              type="text"
              name="doctorId"
              placeholder="Enter doctor ID"
              value={appointmentData.doctorId}
              onChange={onChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPatientId">
            <Form.Label>Patient ID</Form.Label>
            <Form.Control
              type="text"
              name="patientId"
              placeholder="Enter patient ID"
              value={appointmentData.patientId}
              onChange={onChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AppointmentAddModal;
