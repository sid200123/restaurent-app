import { Fastfood, Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { textAlign } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/HeaderStyle.scss";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToogle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToogle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        component={"div"}
        color="goldenrod"
        sx={{
          flexGrow: 1,
          my: 2,
        }}
      >
        <Fastfood />
        Food Restaurant
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar
          component={"nav"}
          sx={{
            bgcolor: "black",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToogle}
            >
              <Menu />
            </IconButton>
            <Typography
              variant="h6"
              component={"div"}
              color="goldenrod"
              sx={{
                flexGrow: 1,
              }}
            >
              <Fastfood />
              Food Restaurant
            </Typography>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                },
              }}
            >
              <ul className="navigation-menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/menu">Menu</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component={"nav"}>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToogle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
