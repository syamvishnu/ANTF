import React from "react";
import DataTable from "../components/DataTable";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { Link } from "react-router-dom";
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "semantic-ui-react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import More from "../pages/More";

function RecordResult() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { data, message, isError, isLoading, isSuccess } = useSelector(
    (state) => state.search
  );

  console.log(data);
  {
    data && console.log(typeof data);
  }
  return (
    <div>
      <div>
        <Header />
        {isLoading && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100vh",
            }}
          >
            <CircularProgress />
          </Box>
        )}

        {isSuccess && (
          <div style={{ padding: "150px" }}>
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
              {data
                ? data.map((row) => {
                    return (
                      <TableBody>
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
          </div>
        )}
        {isError && (
          <Alert
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100vh",
            }}
            severity="error"
          >
            <AlertTitle>Error</AlertTitle>
            {message}
          </Alert>
        )}
      </div>
    </div>
  );
}

export default RecordResult;
