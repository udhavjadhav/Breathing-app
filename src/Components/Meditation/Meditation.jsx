import React from "react";
import SongsDetails from "../SongsDetails";
import InnerNav from "../InnerNav/InnerNav";
import Navbar from "../Navbar/Navbar";
import HomeInfo from "../HomePage/HomeInfo";
import MedNav from "./MedNav";
import Footer from "../Footer/Footer";
import { Grid } from "@mui/material";
function Meditation() {
  return (
    <>
      <Navbar />
      <MedNav />
      <div className="meditation mt-4">
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
