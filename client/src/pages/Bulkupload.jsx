import React from "react";
import Header from "../components/Header";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import "./Bulkupload.css";
import Stack from "@mui/material/Stack";

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
          <Stack direction="row" spacing={2}>
            <Button
              style={{ width: "250px", height: "50px" }}
              component="label"
              role={undefined}
              variant="outlined"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Select File <VisuallyHiddenInput type="file" />
            </Button>
            <Button
              style={{ width: "250px", height: "50px" }}
              variant="contained"
              endIcon={<SendIcon />}
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
