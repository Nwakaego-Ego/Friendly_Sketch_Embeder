import React from "react";
import ModeButton from "./ModeButton";
import Stack from "@mui/material/Stack";
import "./ModeButtonGroup.css";

export default function ModeButtonsGroup({
  embedMode,
  setEmbedMode,
  copied,
  handleCopy,
}) {
  return (
    <Stack direction="row" spacing={2} className="mode-buttons">
      <ModeButton
        label="Multiple Sketch (Recommended)"
        isActive={embedMode === "instance"}
        onClick={() => setEmbedMode("instance")}
      />
      <ModeButton
        label="Iframe Mode"
        isActive={embedMode === "iframe"}
        onClick={() => setEmbedMode("iframe")}
      />
      <ModeButton
        label="Single Sketch"
        isActive={embedMode === "global"}
        onClick={() => setEmbedMode("global")}
      />
      {/* <ModeButton
        label="Wordpress"
        isActive={embedMode === "wordpress"}
        onClick={() => setEmbedMode("wordpress")}
      /> */}
      <ModeButton
        label={copied ? "Copied" : "Copy Code"}
        isActive={false}
        onClick={handleCopy}
      />
    </Stack>
  );
}
