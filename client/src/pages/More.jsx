import React from "react";
import Header from "../components/Header";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LOGO from "../imgs/a1.jpg";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

const rows = [
  createData("Frozen yoghurt", "Syam Vishnu"),
  createData("Ice cream sandwich", 237),
  createData("Eclair", 262),
  createData("Cupcake", 305),
  createData("Gingerbread", 356),
  createData("Frozen yoghurt", "Syam Vishnu"),
  createData("Ice cream sandwich", 237),
  createData("Eclair", 262),
  createData("Cupcake", 305),
  createData("Gingerbread", 356),
];

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

function More() {
  return (
    <div style={{ marginTop: "90px", padding: "20px", paddingTop: "30px" }}>
      <Header />

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs="auto">
            <img src={LOGO} alt="logo" style={{ height: "300px", maxWidth:"250px" }} />{" "}
          </Grid>
          <Grid item xs={6}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 550 }} aria-label="simple table" >
                <TableBody >
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" >
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                      
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default More;
