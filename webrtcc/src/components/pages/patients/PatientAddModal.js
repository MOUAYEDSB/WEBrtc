import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const PatientAddModal = ({ show, onHide, patient, onChange, onSubmit }) => (
  <Modal show={show} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>Add Patient</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={patient.name}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group controlId="formPrnom">
          <Form.Label>Prénom</Form.Label>
          <Form.Control
            type="text"
            name="prnom"
            value={patient.prnom}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={patient.email}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={patient.phone}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group controlId="formDepartment">
          <Form.Label>Department</Form.Label>
          <Form.Control
            type="text"
            name="department"
            value={patient.department}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group controlId="formCompany">
          <Form.Label>Company</Form.Label>
          <Form.Control
            type="text"
            name="company"
            value={patient.company}
            onChange={onChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save changes
        </Button>
      </Form>
    </Modal.Body>
  </Modal>
);

export default PatientAddModal;
