import React from "react";
import SongsDetails from "../SongsDetails";
import Navbar from "../Navbar/Navbar";
import InnerNav from "../InnerNav/InnerNav";
import HomeInfo from "../HomePage/HomeInfo";
import Button from "@mui/material/Button";
import { Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import RelaxNav from "./RelaxNav";
import Footer from "../Footer/Footer";
function Meditation() {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate("/melodies");
  };
  return (
    <>
      <Navbar />
      <RelaxNav />
      <div className="meditation mt-4">
        <Box textAlign="center">
          <Button
            sx={{ fontWeight: "bolder", maxWidth: "50%", m: 2 }}
            fullWidth
            onClick={handleClick}
            variant="contained"
          >
            Melodies
          </Button>
        </Box>
        <div
          className="wrapper"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Grid container spacing={1}>
            {SongsDetails.map((element, index) => {
              return (
                <Grid item xs={6} sm={4} md={4} lg={3} key={index}>
                  <>
                    <HomeInfo element={element} />
                  </>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
      <Footer />
      <InnerNav />
    </>
  );
}

export default Meditation;
