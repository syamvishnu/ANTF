import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import LOGO from "../imgs/a1.jpg";
import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const settings = ["Logout"];

function Header() {
  let navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState();
  const [anchorElUser, setAnchorElUser] = useState();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleRecords = () => {
    navigate("/records");
  };

  const handleEntry = () => {
    navigate("/entry");
  };

  const handleBulkUpload = () => {
    navigate("/bulk");
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={LOGO}
            alt="logo"
            style={{ height: "50px", paddingRight: "30px", marginLeft: "10px" }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 15,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".6rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ANTF
          </Typography>

          <Stack spacing={2} direction="row">
            <Button
              onClick={handleRecords}
              style={{ color: "white" }}
              variant="text"
            >
              Records
            </Button>
            <Button
              onClick={handleEntry}
              style={{ color: "white" }}
              variant="text"
            >
              Entry
            </Button>
            <Button
              onClick={handleBulkUpload}
              style={{ color: "white" }}
              variant="text"
            >
              Bulk Upload
            </Button>
          </Stack>

          <div style={{ position: "absolute", right: 0 }}>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={LOGO} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
