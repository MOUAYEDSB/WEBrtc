import React from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";

const PatientTable = ({ patients, onDelete, onEdit }) => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Prénom</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Password</TableCell>
          <TableCell>CIN</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>City</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {patients.map((patient) => (
          <TableRow
            key={patient.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {patient.id}
            </TableCell>
            <TableCell>{patient.name}</TableCell>
            <TableCell>{patient.prnom}</TableCell>
            <TableCell>{patient.email}</TableCell>
            <TableCell>{patient.password}</TableCell>
            <TableCell>{patient.cin}</TableCell>
            <TableCell>{patient.phone}</TableCell>
            <TableCell>{patient.city}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="error"
                onClick={() => onDelete(patient.id)}
              >
                Delete
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => onEdit(patient)}
                sx={{ marginLeft: 2 }}
              >
                Edit
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default PatientTable;
