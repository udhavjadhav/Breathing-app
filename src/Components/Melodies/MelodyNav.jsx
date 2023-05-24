import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./MelodyNav.css";

export default function SleepNav() {
  const Navigate = useNavigate();
  const handleAll = () => {
    Navigate("/melodies");
  };
  const handleFav = () => {
    Navigate("/nature");
  };
  const handleStories = () => {
    Navigate("/musical");
  };
  const handleMusic = () => {
    Navigate("/category");
  };
  const handleBack = () => {
    Navigate("/relax");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        color=""
        position="static"
        sx={{ position: "relative", left: 0, right: 0, zIndex: 1 }}
        elevation={22}>
        <div>
          <h4 id="headtext">
            <ArrowBackIosNewIcon
              sx={{ cursor: "pointer" }}
              onClick={handleBack}
              className="back"
            />
            Melodies
            <AccessAlarmIcon className="icon" />
          </h4>
          <p
            style={{
              float: "right",
              marginRight: 15,
              fontSize: "12px",
              fontWeight: "bolder",
            }}>
          </p>
        </div>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleAll}
              sx={{ textAlign: "center", fontWeight: "bolder" }}>
              <ListItemText primary="All" />
            </ListItemButton>
            <ListItemButton onClick={handleFav} sx={{ textAlign: "center" }}>
              <ListItemText primary="Nature" />
            </ListItemButton>
            <ListItemButton
              onClick={handleStories}
              sx={{ textAlign: "center" }}>
              <ListItemText primary="Musical" />
            </ListItemButton>
            <ListItemButton onClick={handleMusic} sx={{ textAlign: "center" }}>
              <ListItemText primary="Category" />
            </ListItemButton>
          </ListItem>
        </List>
      </AppBar>
    </Box>
  );
}
