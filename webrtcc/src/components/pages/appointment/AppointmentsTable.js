import React from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Button from "@mui/material/Button";

const AppointmentsTable = ({
  appointments,
  onDelete,
  onEdit,
  doctors,
  patients,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="appointments table">
        <TableHead>
          <TableRow>
            <TableCell style={{ color: "blue" }}>Id</TableCell>
            <TableCell style={{ color: "blue" }}>Date</TableCell>
            <TableCell style={{ color: "blue" }}>Notes</TableCell>
            <TableCell style={{ color: "blue" }}>Doctor Name</TableCell>
            <TableCell style={{ color: "blue" }}>Patient Name</TableCell>
            <TableCell style={{ color: "blue" }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((appointment, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {appointment.id}
              </TableCell>
              <TableCell>{appointment.appointmentDate}</TableCell>
              <TableCell>{appointment.notes}</TableCell>
              <TableCell>{doctors[appointment.doctorId]?.name}</TableCell>
              <TableCell>{patients[appointment.patientId]?.name}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => onDelete(appointment.id)}
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => onEdit(appointment)}
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
};

export default AppointmentsTable;
