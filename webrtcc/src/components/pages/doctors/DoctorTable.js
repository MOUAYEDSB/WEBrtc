import React from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Button from "@mui/material/Button";

const DoctorTable = ({ doctors, onDelete, onEdit }) => (
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
          <TableCell>Batendees</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {doctors.map((doctor) => (
          <TableRow
            key={doctor.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {doctor.id}
            </TableCell>
            <TableCell>{doctor.name}</TableCell>
            <TableCell>{doctor.prnom}</TableCell>
            <TableCell>{doctor.email}</TableCell>
            <TableCell>{doctor.password}</TableCell>
            <TableCell>{doctor.cin}</TableCell>
            <TableCell>{doctor.phone}</TableCell>
            <TableCell>{doctor.city}</TableCell>
            <TableCell>{doctor.batendees}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="error"
                onClick={() => onDelete(doctor.id)}
              >
                Delete
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => onEdit(doctor)}
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

export default DoctorTable;
