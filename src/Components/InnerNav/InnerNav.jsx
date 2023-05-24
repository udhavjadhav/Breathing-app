import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useNavigate } from "react-router-dom";

export default function InnerNav() {
  const [value, setValue] = React.useState("Home");
  const ref = React.useRef(null);

  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate("/");
  };
  const handleRelax = () => {
    Navigate("/relax");
  };
  const handleMeditation = () => {
    Navigate("/meditation");
  };
  const handleSleep = () => {
    Navigate("/sleep");
  };
  const handleSettings = () => {
    Navigate("/settings");
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ p: 4 }} ref={ref}>
      <CssBaseline />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 1 }}
        elevation={3}>
        <div className="bottomNav">
          <BottomNavigation showLabels value={value} onChange={handleChange}>
            <BottomNavigationAction
              onClick={handleClick}
              label="Home"
              sx={{ fontWeight: "bolder", minWidth: "65px" }}
              icon={<HomeOutlinedIcon />}
            />
            <BottomNavigationAction
              onClick={handleSleep}
              label="Sleep"
              sx={{ fontWeight: "bolder", minWidth: "65px" }}
              icon={<BedtimeOutlinedIcon />}
            />
            <BottomNavigationAction
              onClick={handleMeditation}
              label="Meditation"
              sx={{ fontWeight: "bolder", minWidth: "65px" }}
              icon={<SpaOutlinedIcon />}
            />
            <BottomNavigationAction
              onClick={handleRelax}
              label="Relax"
              sx={{ fontWeight: "bolder", minWidth: "65px" }}
              icon={<MusicNoteOutlinedIcon />}
            />
            <BottomNavigationAction
              onClick={handleSettings}
              label="Settings"
              sx={{ fontWeight: "bolder", minWidth: "65px" }}
              icon={<SettingsOutlinedIcon />}
            />
          </BottomNavigation>
        </div>
      </Paper>
    </Box>
  );
}
