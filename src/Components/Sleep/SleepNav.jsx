import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { useState, useEffect } from "react";

export default function SleepNav() {
  const Navigate = useNavigate();
  const handleAll = () => {
    Navigate("/sleep");
  };
  const handleFav = () => {
    Navigate("/myfavourite");
  };
  const handleStories = () => {
    Navigate("/stories");
  };
  const handleMusic = () => {
    Navigate("/music");
  };
  const handleBack = () => {
    Navigate("/");
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
              onClick={handleBack}
              sx={{ cursor: "pointer" }}
              className="back"
            />
            Sleep
            <AccessAlarmIcon className="icon" />
          </h4>
        </div>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleAll}
              sx={{ textAlign: "center", fontWeight: "bolder" }}>
              <ListItemText primary="All" />
            </ListItemButton>
            <ListItemButton onClick={handleFav} sx={{ textAlign: "center" }}>
              <ListItemText primary="MyFavorite" />
            </ListItemButton>
            <ListItemButton
              onClick={handleStories}
              sx={{ textAlign: "center" }}>
              <ListItemText primary="Stories" />
            </ListItemButton>
            <ListItemButton onClick={handleMusic} sx={{ textAlign: "center" }}>
              <ListItemText primary="Music" />
            </ListItemButton>
          </ListItem>
        </List>
      </AppBar>
    </Box>
  );
}
