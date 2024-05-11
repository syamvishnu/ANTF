import React from "react";
import Paper from "@mui/material/Paper";
import DTable from "react-data-table-component";
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
  return (
    <div className="dtable">
      <Paper sx={{ width: "70%" }}>
        <DTable
          title="All Information List"
          columns={column}
          data={data}
          fixedHeader
          pagination
        ></DTable>
      </Paper>
    </div>
  );
}

export default DataTable;
