import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import "./PlayPauseButtons.css";

const PlayPauseButtons = ({ shouldRun, setShouldRun }) => {
  return (
    <div>
      <Tooltip title="Play Sketch" className="play-sketch">
        <IconButton
          onClick={() => setShouldRun(true)}
          color="primary"
          disabled={shouldRun}
        >
          <PlayArrowIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Stop Sketch">
        <IconButton
          onClick={() => setShouldRun(false)}
          color="secondary"
          disabled={!shouldRun}
        >
          <StopIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default PlayPauseButtons;
