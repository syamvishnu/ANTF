import React, {useState} from "react";
import Paper from "@mui/material/Paper";
import DTable, { createTheme } from "react-data-table-component";
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

  createTheme(
    "solarized",
    {
      text: {
        primary: "#268bd2",
        secondary: "#2aa198",
      },
      background: {
        default: "#002b36",
      },
      context: {
        background: "#cb4b16",
        text: "#FFFFFF",
      },
      divider: {
        default: "#073642",
      },
      button: {
        default: "#2aa198",
        hover: "rgba(0,0,0,.08)",
        focus: "rgba(255,255,255,.12)",
        disabled: "rgba(255, 255, 255, .34)",
      },
      sortFocus: {
        default: "#2aa198",
      },
    },
    "dark"
  );

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
      <DTable
        columns={column}
        data={data}
        // theme="solarized"
        fixedHeader
        highlightOnHover
      ></DTable>
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
