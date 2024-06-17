import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "semantic-ui-react";
import "./DataTable.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import More from "../pages/More";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function DataTable() {
  const [page, setPage] = useState(1);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const data = [
    {
      id: 1,
      name: "syam",
      email: "ss@email.com",
      address: "Fno. 10, EKM",
      mob: "9999999999",
    },
    {
      id: 2,
      name: "vishnu ",
      email: "vv@email.com",
      address: "Fno. 20, ktm",
      mob: "9999999999",
    },
    {
      id: 1,
      name: "syam",
      email: "ss@email.com",
      address: "Fno. 10, EKM",
      mob: "9999999999",
    },
    {
      id: 2,
      name: "vishnu ",
      email: "vv@email.com",
      address: "Fno. 20, ktm",
      mob: "9999999999",
    },
    {
      id: 1,
      name: "syam",
      email: "ss@email.com",
      address: "Fno. 10, EKM",
      mob: "9999999999",
    },
    {
      id: 2,
      name: "vishnu ",
      email: "vv@email.com",
      address: "Fno. 20, ktm",
      mob: "9999999999",
    },
    {
      id: 1,
      name: "syam",
      email: "ss@email.com",
      address: "Fno. 10, EKM",
      mob: "9999999999",
    },
    {
      id: 2,
      name: "vishnu ",
      email: "vv@email.com",
      address: "Fno. 20, ktm",
      mob: "9999999999",
    },
    {
      id: 1,
      name: "syam",
      email: "ss@email.com",
      address: "Fno. 10, EKM",
      mob: "9999999999",
    },
    {
      id: 2,
      name: "vishnu ",
      email: "vv@email.com",
      address: "Fno. 20, ktm",
      mob: "9999999999",
    },
  ];

  return (
    <div
      className="dtable"
      style={{
        marginLeft: "50px",
        marginRight: "50px",
        border: "5px solid rgba(0, 0, 0, 0.05)",
      }}
    >
      <h1>Case Files</h1>
      <Table celled padded>
        <TableHeader textAlign="center">
          <TableRow>
            <TableHeaderCell singleLine>Case No</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell singleLine>Phone Number</TableHeaderCell>
            <TableHeaderCell>Address</TableHeaderCell>
            <TableHeaderCell>Action</TableHeaderCell>
          </TableRow>
        </TableHeader>
        {data.map((row) => {
          return (
            <TableBody>
              <TableRow>
                <TableCell textAlign="center">1</TableCell>
                <TableCell singleLine textAlign="center">
                  {row.name}
                </TableCell>
                <TableCell textAlign="center">abhi@mail.com</TableCell>
                <TableCell singleLine textAlign="center">
                  {row.mob}
                </TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell singleLine textAlign="center">
                  <div>
                    <Button onClick={handleOpen}>More Details</Button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <More />
                    </Modal>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          );
        })}
      </Table>

      <Stack style={{ paddingTop: "20px", paddingBottom: "20px" }} spacing={2}>
        <Pagination
          count
          showFirstButton
          showLastButton
          defaultPage={1}
          onChange
        />
      </Stack>
    </div>
  );
}

export default DataTable;
