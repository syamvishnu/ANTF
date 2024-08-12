import React, { useEffect, useState } from "react";
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [datas, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0); // For pagination calculation

  const fetchData = async () => {
    const response = await fetch(
      `http://localhost:8000/data/home?page=${page}`
    );
    const data = await response.json();
    setData(data); // Assuming the data is returned in a specific format (adjust based on your API)
    setTotalPages(data.lastpage); // Assuming the server sends the total number of pages
    console.log(data.data);
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

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
        {datas.data
          ? datas.data.map((row) => {
              return (
                <TableBody key={row._id}>
                  <TableRow>
                    <TableCell textAlign="center">1</TableCell>
                    <TableCell singleLine textAlign="center">
                      {row.name}
                    </TableCell>
                    <TableCell textAlign="center">{row.email}m</TableCell>
                    <TableCell singleLine textAlign="center">
                      {row.contact}
                    </TableCell>
                    <TableCell>{row.address}</TableCell>
                    <TableCell singleLine textAlign="center">
                      <div>
                        <Link to={`/home/more/${row._id}`}>More</Link>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              );
            })
          : null}
      </Table>

      <Stack style={{ paddingTop: "20px", paddingBottom: "20px" }} spacing={2}>
        <Pagination
          count={totalPages} // Provide the total number of pages here
          showFirstButton
          showLastButton
          defaultPage={1}
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
}

export default DataTable;
