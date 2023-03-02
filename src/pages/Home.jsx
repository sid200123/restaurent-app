import { Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Banner from "../images/banner.jpeg";
import "../styles/HomeStyle.scss";

const Home = () => {
  return (
    <Layout>
      <div
        className="home"
        style={{
          backgroundImage: `url(${Banner})`,
        }}
      >
        <div className="headerContainer">
          <Typography variant="h3" component="h1">
            Food Website
          </Typography>
          <Typography component="p">Best Food In India</Typography>
          <Button
            component="button"
            variant="contained"
            color="success"
            size="small"
          >
            <Link
              style={{
                textDecoration: "none",
                color: "white",
              }}
              to="/menu"
            >
              Order Now
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
