import React from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Button from "@mui/material/Button";

const AdminTable = ({ admins, onDelete, onEdit }) => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="admin table">
      <TableHead>
        <TableRow>
          <TableCell style={{ color: "blue" }}>Id</TableCell>
          <TableCell style={{ color: "blue" }}>User Name</TableCell>
          <TableCell style={{ color: "blue" }}>Email</TableCell>
          <TableCell style={{ color: "blue" }}>Password</TableCell>
          <TableCell style={{ color: "blue" }}>Phone</TableCell>
          <TableCell style={{ color: "blue" }}>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {admins.map((admin) => (
          <TableRow
            key={admin.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {admin.id}
            </TableCell>
            <TableCell>{admin.username}</TableCell>
            <TableCell>{admin.email}</TableCell>
            <TableCell>{admin.password}</TableCell>
            <TableCell>{admin.phone}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="error"
                onClick={() => onDelete(admin.id)}
              >
                Delete
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => onEdit(admin)}
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

export default AdminTable;
