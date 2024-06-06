import React from "react";
import "./Recordpage.css";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Header from "../components/Header";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

function Recordpage() {
  return (
    <div style={{ marginTop: "90px", padding: "20px", paddingTop:"30px" }}>
      <Header />

      <Paper
        style={{
          display: "flex",
          height: "455px",
          paddingTop:"50px",
          justifyContent: "center",
        }}
        elevation={8}
      >
        <Box className="record" sx={{ width: "100%" }}>
          <Stack spacing={7}>
            <Stack direction="row" spacing={5}>
              <h1>Search Information</h1>
            </Stack>
            <Stack direction="row" spacing={10}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Name"
                variant="outlined"
              />
              <TextField
                fullWidth
                id="outlined-start-adornment"
                label="Father's Name"
                variant="outlined"
              />
              <TextField
                fullWidth
                id="outlined-basic"
                label="Contact"
                variant="outlined"
              />
            </Stack>
            <Stack direction="row" spacing={10}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
              <TextField
                fullWidth
                id="outlined-start-adornment"
                label="Address Keyword"
                variant="outlined"
              />
              <TextField
                fullWidth
                id="outlined-basic"
                label="Proof No."
                variant="outlined"
              />
            </Stack>
            <Stack direction="row" spacing={5}>
              <Button variant="contained" endIcon={<SendIcon />}>
                Search
              </Button>{" "}
            </Stack>
          </Stack>
        </Box>
      </Paper>
    </div>
  );
}

export default Recordpage;
