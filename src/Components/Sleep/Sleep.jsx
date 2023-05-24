import React from "react";
import SleepDetails from "./SleepDetails";
import Navbar from "../Navbar/Navbar";
import SleepNav from "./SleepNav";
import InnerNav from "../InnerNav/InnerNav";
import Footer from "../Footer/Footer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Sleep() {
  const Navigate = useNavigate();
  return (
    <>
      <Navbar />
      <SleepNav />
      <div className="sleepdiv">
        <div
          className="sleepsection"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}>
          <Grid container spacing={1}>
            {SleepDetails.map((element, index) => {
              return (
                <Grid item xs={6} sm={4} md={4} lg={3} key={index}>
                  <>
                    <Card
                      onClick={() => {
                        Navigate(`/sleepsongs/${element.id}`);
                      }}
                      sx={{
                        width: 412,
                        maxWidth: "90%",
                        height: 260,
                        m: 1,
                        flexDirection: "row",
                      }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="150"
                          image={element.image}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h7">
                            {element.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {element.name}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
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

export default Sleep;
