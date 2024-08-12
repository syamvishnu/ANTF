import React, { useState } from "react";
import Header from "../components/Header";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import "./Bulkupload.css";
import Stack from "@mui/material/Stack";
import * as xlsx from "xlsx";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../features/data/dataSlice";
import Alert from "@mui/material/Alert";

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

function Bulkupload() {
  const [excelData, setExcelData] = useState([]);
  const dispatch = useDispatch();

  const { data, message, isError, isSuccess, isLoading } = useSelector(
    (state) => state.data
  );

  const resdExcel = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = xlsx.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = xlsx.utils.sheet_to_json(worksheet);
      setExcelData(json);
    };

    reader.readAsArrayBuffer(file);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    excelData.map((val) => {
      const newData = {
        sdiv: val.sdiv,
        pstn: val.pstn,
        crno: val.crno,
        firdate: val.firdate,
        name: val.name,
        father: val.father,
        spouse: val.spouse,
        idno: val.idno,
        contact: val.contact,
        email: val.email,
        address: val.address,
      };
      console.log(newData)
      console.log(newData.idno)

      dispatch(addData(newData));
    });
  };




  return (
    <div>
      <Header />
      <Stack sx={{ width: "100%", paddingTop:"70px" }} spacing={2}>
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
      <h1 className="bulk2"> Please Upload Excel file (.xlsx)</h1>
      <div className="bulk">
        <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
          <Stack direction="row" spacing={2}>
            <Button
              style={{ width: "250px", height: "50px" }}
              component="label"
              role={undefined}
              variant="outlined"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
              onChange={resdExcel}
            >
              Select File <VisuallyHiddenInput type="file" />
            </Button>
            <Button
              style={{ width: "250px", height: "50px" }}
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleUpload}
            >
              Upload
            </Button>
          </Stack>
        </Box>
      </div>
    </div>
  );
}

export default Bulkupload;
