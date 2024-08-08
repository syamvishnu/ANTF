import React, { useEffect, useState } from "react";
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
import axios from "axios";
import Modal from "@mui/material/Modal";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Entrypage from "./Entrypage";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function More(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [moreData, setMoreData] = useState([]);
  

  const navigate = useNavigate();

  var { id } = useParams();
  const newQuery = {
    id: id,
  };

  const handleDelete = () => {
    axios
      .post("http://localhost:8000/data/delete", newQuery)
      .then(navigate("/home"));
  };

  useEffect(() => {
    axios.post("http://localhost:8000/data/home", newQuery).then((res) => {
      setMoreData(res.data.data);
    });
  }, []);

  const handleUpdate = () =>{
    navigate(`/home/edit/${id}`)
    
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Header />
      {moreData &&
        moreData.map((val) => {
          return (
            <Card sx={{ width: 700, height: 550, paddingTop: 6.5 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  paddingTop: "50px",
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
                          <h4>Sub Division : {val.sdiv}</h4>{" "}
                        </Item>
                      </Grid>
                      <Grid item xs={6}>
                        <Item>
                          <h4>Police Station : {val.pstn}</h4>
                        </Item>
                      </Grid>
                      <Grid item xs={6}>
                        <Item>
                          <h4>Crine No : {val.crno}</h4>
                        </Item>{" "}
                      </Grid>
                      <Grid item xs={6}>
                        <Item>
                          <h4>FIR Date : {val.firdate}</h4>
                        </Item>{" "}
                      </Grid>
                      <Grid item xs={6}>
                        <Item>
                          <h4>Name : {val.name}</h4>
                        </Item>{" "}
                      </Grid>
                      <Grid item xs={6}>
                        <Item>
                          <h4>Father' Name : {val.father}</h4>
                        </Item>{" "}
                      </Grid>
                      <Grid item xs={6}>
                        <Item>
                          <h4>Spouse Name : {val.spouse}</h4>
                        </Item>{" "}
                      </Grid>
                      <Grid item xs={6}>
                        <Item>
                          <h4>ID Proof No. : {val.idno}</h4>
                        </Item>{" "}
                      </Grid>
                      <Grid item xs={6}>
                        <Item>
                          <h4>Contact No: {val.contact}</h4>
                        </Item>{" "}
                      </Grid>
                      <Grid item xs={6}>
                        <Item>
                          <h4>Full Address : {val.address}</h4>
                        </Item>{" "}
                      </Grid>
                    </Grid>
                  </Box>
                </div>
              </CardContent>
              <div style={{ padding: "10px" }}>
                <CardActions>
                  <Button>Export </Button>
                  <Button  onClick={handleUpdate}>Update </Button>
                  <Button onClick={handleDelete}>Delete </Button>
                </CardActions>
              </div>
            </Card>
          );
        })}
    </div>
  );
}

export default More;
