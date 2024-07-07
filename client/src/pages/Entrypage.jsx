import React, { useState } from "react";
import "./Entrypage.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";
import { addData } from "../features/auth/dataSlice";
import Alert from "@mui/material/Alert";

function convertBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}

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

  const dispatch = useDispatch();
  const [inputDetails, setInputDetails] = useState({
    sdiv: "",
    pstn: "",
    crno: "",
    firdate: "",
    name: "",
    father: "",
    spouse: "",
    idno: "",
    contact: "",
    email: "",
    address: "",
    photo: "",
  });
  const [img, setImg] = useState("");

  const { data, message, isError, isSuccess, isLoading } = useSelector(
    (state) => state.data
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputDetails((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const handleImg = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setImg(base64);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      sdiv: inputDetails.sdiv,
      pstn: inputDetails.pstn,
      crno: inputDetails.crno,
      firdate: inputDetails.firdate,
      name: inputDetails.name,
      father: inputDetails.father,
      spouse: inputDetails.spouse,
      idno: inputDetails.idno,
      contact: inputDetails.contact,
      email: inputDetails.email,
      address: inputDetails.address,
      photo: img,
    };
    dispatch(addData(formData));
    setInputDetails({
      sdiv: "",
      pstn: "",
      crno: "",
      firdate: "",
      name: "",
      father: "",
      spouse: "",
      idno: "",
      contact: "",
      email: "",
      address: "",
      photo: "",
    });
    setImg("");
  };

  console.log(data);
  console.log(message);
  console.log(isError);

  return (
    <div style={{ marginTop: "90px", padding: "20px", paddingTop: "30px" }}>
      <Header />
      <Stack sx={{ width: "100%" }} spacing={2}>
        {isSuccess == true ? (
          <Alert variant="filled" severity="success">
            Successfully Added
          </Alert>
        ) : null}
        {isError == true ? (
          <Alert variant="filled" severity="error">
            {message}
          </Alert>
        ) : null}
      </Stack>

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
              <h1>Enter Information</h1>
            </Stack>
            <Stack direction="row" spacing={10}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Sub Division"
                variant="outlined"
                name="sdiv"
                value={inputDetails.sdiv}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                id="outlined-start-adornment"
                label="Police Station"
                variant="outlined"
                name="pstn"
                value={inputDetails.pstn}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                id="outlined-basic"
                label="Crime Number"
                variant="outlined"
                name="crno"
                value={inputDetails.crno}
                onChange={handleChange}
              />
            </Stack>
            <Stack direction="row" spacing={10}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="FIR Date"
                variant="outlined"
                name="firdate"
                value={inputDetails.firdate}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                id="outlined-start-adornment"
                label="Name"
                variant="outlined"
                name="name"
                value={inputDetails.name}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                id="outlined-basic"
                label="Father's Name"
                variant="outlined"
                name="father"
                value={inputDetails.father}
                onChange={handleChange}
              />
            </Stack>

            <Stack direction="row" spacing={10}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Spouse Name"
                variant="outlined"
                name="spouse"
                value={inputDetails.spouse}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                id="outlined-start-adornment"
                label="ID Proof No."
                variant="outlined"
                name="idno"
                value={inputDetails.idno}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                id="outlined-basic"
                label="Contact Number"
                variant="outlined"
                name="contact"
                value={inputDetails.contact}
                onChange={handleChange}
              />
            </Stack>

            <Stack direction="row" spacing={10}>
              <TextField
                style={{ width: "334px" }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                name="email"
                value={inputDetails.email}
                onChange={handleChange}
              />

              <TextField
                style={{ width: "334px" }}
                id="outlined-basic"
                label="Full Address"
                variant="outlined"
                name="address"
                value={inputDetails.address}
                onChange={handleChange}
              />

              <Button
                style={{ width: "334px" }}
                component="label"
                role={undefined}
                variant="outlined"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                accept="image/png, image/gif, image/jpeg"
                name="photo"
                onChange={(e) => handleImg(e)}
              >
                Select Photo
                <VisuallyHiddenInput type="file" />
              </Button>
            </Stack>

            <Stack direction="row">
              <Button
                style={{ width: "250px", height: "50px" }}
                variant="contained"
                endIcon={<SendIcon />}
                onClick={handleSubmit}
              >
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
