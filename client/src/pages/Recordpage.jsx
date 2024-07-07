import React, { useState } from "react";
import "./Recordpage.css";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Header from "../components/Header";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

function Recordpage() {
  const [inputDetails, setInputDetails] = useState({
    name: "",
    father: "",
    idno: "",
    contact: "",
    address: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputDetails((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    console.log(inputDetails);

    setInputDetails({
      name: "",
      father: "",
      idno: "",
      contact: "",
      address: "",
      email: "",
    });
  };

  return (
    <div style={{ marginTop: "90px", padding: "20px", paddingTop: "30px" }}>
      <Header />

      <Paper
        style={{
          display: "flex",
          height: "455px",
          paddingTop: "50px",
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
                name="name"
                value={inputDetails.name}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                id="outlined-start-adornment"
                label="Father's Name"
                variant="outlined"
                name="father"
                value={inputDetails.father}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                id="outlined-basic"
                label="Contact"
                variant="outlined"
                name="contact"
                value={inputDetails.contact}
                onChange={handleChange}
              />
            </Stack>
            <Stack direction="row" spacing={10}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Email"
                variant="outlined"
                name="email"
                value={inputDetails.email}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                id="outlined-start-adornment"
                label="Address Keyword"
                variant="outlined"
                name="address"
                value={inputDetails.address}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                id="outlined-basic"
                label="Proof No."
                variant="outlined"
                name="idno"
                value={inputDetails.idno}
                onChange={handleChange}
              />
            </Stack>
            <Stack direction="row" spacing={5}>
              <Button
                style={{ width: "250px", height: "50px" }}
                variant="contained"
                endIcon={<SendIcon />}
                onClick={handleSubmit}
              >
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
