import React from "react";
import Paper from "@mui/material/Paper";
import DTable, { createTheme } from "react-data-table-component";
import "./DataTable.css";

function DataTable() {
  const column = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Address",
      selector: (row) => row.address,
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
    <div className="dtable">
      <Paper sx={{ width: "70%" }}>
        <DTable
          title="All Information List"
          columns={column}
          data={data}
          // theme="solarized"
          fixedHeader
          pagination
        ></DTable>
      </Paper>
    </div>
  );
}

export default DataTable;
