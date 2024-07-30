import React from "react";
import DataTable from "../components/DataTable";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function RecordResult() {
  const { data, message, isError, isLoading, isSuccess } = useSelector(
    (state) => state.data
  );
  {data && console.log(typeof(data))}
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

        {isSuccess && <DataTable data={data} />}
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
