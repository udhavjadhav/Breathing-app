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

export default function RelaxNav() {
  const Navigate = useNavigate();
  const handleAll = () => {
    Navigate("/relax");
  };
  const handleFav = () => {
    Navigate("/favourite");
  };
  const handleStories = () => {
    Navigate("/beginners");
  };
  const handleMusic = () => {
    Navigate("/selfcalm");
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
            Relax
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
              <ListItemText primary="Favorite" />
            </ListItemButton>
            <ListItemButton
              onClick={handleStories}
              sx={{ textAlign: "center" }}>
              <ListItemText primary="Beginners" />
            </ListItemButton>
            <ListItemButton onClick={handleMusic} sx={{ textAlign: "center" }}>
              <ListItemText primary="Self-calm" />
            </ListItemButton>
          </ListItem>
        </List>
      </AppBar>
    </Box>
  );
}
