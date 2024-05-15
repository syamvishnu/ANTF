import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Header,
  Table,
  Rating,
} from "semantic-ui-react";
import "./DataTable.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function DataTable() {
  const [page, setPage] = useState(1);

  const column = [
    {
      name: (
        <h3>
          <strong>#Name</strong>
        </h3>
      ),
      selector: (row) => <strong>{row.name}</strong>,
    },
    {
      name: (
        <h3>
          <strong>#House Name</strong>
        </h3>
      ),
      selector: (row) => <strong>{row.address}</strong>,
    },
    {
      name: (
        <h3>
          <strong>#Place</strong>
        </h3>
      ),
      selector: (row) => <strong> {row.place}</strong>,
    },
    {
      name: (
        <h3>
          <strong>#Aadhar</strong>
        </h3>
      ),
      selector: (row) => <strong>{row.aadhar}</strong>,
    },
    {
      name: (
        <h3>
          <strong>#Action</strong>
        </h3>
      ),
      // cell: (row) => (
      //   <Link style={{ color: "#5f6a6a" }} to={`/home/edit/${row._id}`}>
      //     More
      //   </Link>
      // ),
    },
  ];

  const data = [
    {
      id: 1,
      name: "syam",
      email: "ss@email.com",
      address: "Fno. 10, EKM",
    },
    {
      id: 2,
      name: "vishnu ",
      email: "vv@email.com",
      address: "Fno. 20, ktm",
    },
    {
      id: 1,
      name: "syam",
      email: "ss@email.com",
      address: "Fno. 10, EKM",
    },
    {
      id: 2,
      name: "vishnu ",
      email: "vv@email.com",
      address: "Fno. 20, ktm",
    },
    {
      id: 1,
      name: "syam",
      email: "ss@email.com",
      address: "Fno. 10, EKM",
    },
    {
      id: 2,
      name: "vishnu ",
      email: "vv@email.com",
      address: "Fno. 20, ktm",
    },
    {
      id: 1,
      name: "syam",
      email: "ss@email.com",
      address: "Fno. 10, EKM",
    },
    {
      id: 2,
      name: "vishnu ",
      email: "vv@email.com",
      address: "Fno. 20, ktm",
    },
    {
      id: 1,
      name: "syam",
      email: "ss@email.com",
      address: "Fno. 10, EKM",
    },
    {
      id: 2,
      name: "vishnu ",
      email: "vv@email.com",
      address: "Fno. 20, ktm",
    },
    {
      id: 1,
      name: "syam",
      email: "ss@email.com",
      address: "Fno. 10, EKM",
    },
    {
      id: 2,
      name: "vishnu ",
      email: "vv@email.com",
      address: "Fno. 20, ktm",
    },
    {
      id: 1,
      name: "syam",
      email: "ss@email.com",
      address: "Fno. 10, EKM",
    },
    {
      id: 2,
      name: "vishnu ",
      email: "vv@email.com",
      address: "Fno. 20, ktm",
    },
    {
      id: 1,
      name: "syam",
      email: "ss@email.com",
      address: "Fno. 10, EKM",
    },
    {
      id: 2,
      name: "vishnu ",
      email: "vv@email.com",
      address: "Fno. 20, ktm",
    },
    {
      id: 1,
      name: "syam",
      email: "ss@email.com",
      address: "Fno. 10, EKM",
    },
    {
      id: 2,
      name: "vishnu ",
      email: "vv@email.com",
      address: "Fno. 20, ktm",
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
      <Table celled padded >
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

        <TableBody >
          <TableRow>
            <TableCell textAlign="center" >
                1
            </TableCell>
            <TableCell singleLine textAlign="center">Abhijith</TableCell>
            <TableCell textAlign="center">
              abhi@mail.com
            </TableCell>
            <TableCell singleLine textAlign="center">
              +91 9999999999
            </TableCell>
            <TableCell>
              Creatine supplementation is the reference compound for increasing
              muscular creatine levels; there is variability in this increase,
              however, with some nonresponders.
            </TableCell>
            <TableCell singleLine textAlign="center"><Link to={"/home"}>More</Link></TableCell>

          </TableRow>
          
        </TableBody>
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
