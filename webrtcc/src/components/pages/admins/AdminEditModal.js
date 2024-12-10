import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const AdminEditModal = ({ show, onHide, admin, onChange, onSubmit }) => (
  <Modal show={show} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>Edit Admin</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {admin && (
        <Form>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Enter username"
              value={admin.username}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={admin.email}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={admin.password}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              placeholder="Enter phone number"
              value={admin.phone}
              onChange={onChange}
            />
          </Form.Group>
        </Form>
      )}
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>
        Cancel
      </Button>
      <Button variant="primary" onClick={onSubmit}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
);

export default AdminEditModal;
