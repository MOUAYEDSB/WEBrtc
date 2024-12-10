import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const DoctorEditModal = ({ show, onHide, doctor, onChange, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(doctor);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Doctor</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {doctor && (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={doctor.name}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="formPrnom">
              <Form.Label>Prénom</Form.Label>
              <Form.Control
                type="text"
                name="prnom"
                value={doctor.prnom}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={doctor.email}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={doctor.password}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="formCIN">
              <Form.Label>CIN</Form.Label>
              <Form.Control
                type="text"
                name="cin"
                value={doctor.cin}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={doctor.phone}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={doctor.city}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="formBatendees">
              <Form.Label>Batendees</Form.Label>
              <Form.Control
                type="text"
                name="batendees"
                value={doctor.batendees}
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
};

export default DoctorEditModal;
