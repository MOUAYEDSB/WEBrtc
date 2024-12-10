import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const PatientEditModal = ({ show, onHide, patient, onChange, onSubmit }) => (
  <Modal show={show} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>Edit Patient</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {patient && (
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
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={patient.password}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group controlId="formCIN">
            <Form.Label>CIN</Form.Label>
            <Form.Control
              type="text"
              name="cin"
              value={patient.cin}
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
          <Form.Group controlId="formCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="city"
              value={patient.city}
              onChange={onChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Form>
      )}
    </Modal.Body>
  </Modal>
);

export default PatientEditModal;
