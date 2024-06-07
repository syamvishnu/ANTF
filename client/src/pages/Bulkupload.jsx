import React from "react";
import Header from "../components/Header";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Box from "@mui/material/Box";
import "./Bulkupload.css";

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
  return (
    <div>
      <Header />
      <h1 className="bulk2"> Please Upload Excel file (.xlsx)</h1>
      <div className="bulk">
        <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload file
            <VisuallyHiddenInput type="file" />
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default Bulkupload;
