import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import LOGO from "../imgs/a1.jpg";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function More() {
  return (
    <div>
      <Card sx={{ width: 700, height: 550 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          <CardMedia
            style={{ width: "150px", height: "150px" }}
            image={LOGO}
            title="green iguana"
          />
        </div>
        <CardContent>
          <div>
            <Box sx={{ width: "100%" }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <Item>
                    <h4>Sub Division : Kakkand</h4>{" "}
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <h4>Police Station : Kakkand</h4>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <h4>Crine No : 111/2024 u/s 420, ipc</h4>
                  </Item>{" "}
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <h4>FIR Date : 11/12/2023</h4>
                  </Item>{" "}
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <h4>Name : Anas P K</h4>
                  </Item>{" "}
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <h4>Father' Name : Kunjali</h4>
                  </Item>{" "}
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <h4>Spouse Name : Beena</h4>
                  </Item>{" "}
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <h4>ID Proof No. : 12487578455</h4>
                  </Item>{" "}
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <h4>Contact No: 9995878783</h4>
                  </Item>{" "}
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <h4>Full Address : 12b Raibo Colony</h4>
                  </Item>{" "}
                </Grid>
              </Grid>
            </Box>
          </div>
        </CardContent>
        <div style={{ padding: "10px" }}>
          <CardActions>
            <Button>Export </Button>
            <Button>Update </Button>
            <Button>Delete </Button>
          </CardActions>
        </div>
      </Card>
    </div>
  );
}

export default More;
