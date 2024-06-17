import React from "react";
import "./Entrypage.css";
import Header from "../components/Header";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

function Entrypage() {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <div style={{ marginTop: "90px", padding: "20px", paddingTop: "30px" }}>
      <Header />

      <Paper
        style={{
          display: "flex",
          height: "530px",
          paddingTop: "25px",
          justifyContent: "center",
        }}
        elevation={8}
      >
        <Box className="entry" sx={{ width: "100%" }}>
          <Stack spacing={4}>
            <Stack direction="row" spacing={5}>
              <h1>Search Information</h1>
            </Stack>
            <Stack direction="row" spacing={10}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Sub Division"
                variant="outlined"
              />
              <TextField
                fullWidth
                id="outlined-start-adornment"
                label="Police Station"
                variant="outlined"
              />
              <TextField
                fullWidth
                id="outlined-basic"
                label="Crime Number"
                variant="outlined"
              />
            </Stack>
            <Stack direction="row" spacing={10}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="FIR Date"
                variant="outlined"
              />
              <TextField
                fullWidth
                id="outlined-start-adornment"
                label="Name"
                variant="outlined"
              />
              <TextField
                fullWidth
                id="outlined-basic"
                label="Father's Name"
                variant="outlined"
              />
            </Stack>

            <Stack direction="row" spacing={10}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Spouse Name"
                variant="outlined"
              />
              <TextField
                fullWidth
                id="outlined-start-adornment"
                label="ID Proof No."
                variant="outlined"
              />
              <TextField
                fullWidth
                id="outlined-basic"
                label="Contact Number"
                variant="outlined"
              />
            </Stack>

            <Stack direction="row" spacing={10}>
              <TextField
                style={{ width: "334px" }}
                id="outlined-basic"
                label="Full Address"
                variant="outlined"
              />

              <Button
              style={{width:"334px"}}
                component="label"
                role={undefined}
                variant="outlined"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                Select Photo
                <VisuallyHiddenInput type="file" />
              </Button>
            </Stack>

            <Stack direction="row" >
              <Button style={{width:"250px", height:"50px"}} variant="contained" >
                Submit
              </Button>{" "}
            </Stack>
          </Stack>
        </Box>
      </Paper>
    </div>
  );
}

export default Entrypage;
