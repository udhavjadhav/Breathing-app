import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import InnerNav from "../InnerNav/InnerNav";
import MelodiesDetails from "./MelodiesDetails";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "./Melodies.css";
import MelodyNav from "./MelodyNav";
// import Footer from '../Footer/Footer';

const Melodies = ({ demo }) => {
  const [condition, setCondition] = useState([]);
  function valuetext(value) {
    return `${value}°C`;
  }
  return (
    <>
      <Navbar />
      <MelodyNav />
      <div className="melodies">
        <div className="container">
          <div className="row d-flex flex-wrap g-1">
            {MelodiesDetails.map((element, index) => {
              const num = index + 1;
              return (
                <>
                  <div
                    id={num == condition ? "showShadow" : condition}
                    onClick={() => {
                      var audio = new Audio(element.song);
                      audio.play();
                      setCondition(element.id);
                    }}
                    key={index}
                    style={{
                      height: "16vh",
                      width: "16vh",
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                    className="view">
                    <div id="text">
                      <p className="titletext" style={{ fontWeight: "bold" }}>
                        {element.title}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <Accordion sx={{ mt: 25 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <h4
              style={{ fontWeight: "bolder" }}
              className="container text-center">
              Mixer{" "}
            </h4>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="container d-flex w-50">
                <Box sx={{ width: 600, textAlign: "center" }}>
                  <span>Sound 1</span>
                  <Slider
                    aria-label="Temperature"
                    defaultValue={30}
                    getAriaValueText={valuetext}
                    color="primary"
                  />
                </Box>
                <Box sx={{ width: 600, textAlign: "center" }}>
                  <span>Sound 2</span>
                  <Slider
                    aria-label="Temperature"
                    defaultValue={30}
                    getAriaValueText={valuetext}
                    color="primary"
                  />
                </Box>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <InnerNav />
    </>
  );
};

export default Melodies;
