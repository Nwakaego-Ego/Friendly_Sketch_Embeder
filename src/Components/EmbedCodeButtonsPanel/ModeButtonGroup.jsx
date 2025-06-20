import React from "react";
import ModeButtons from "./ModeButtons";
import "./ModeButtonGroup.css";

export default function ModeButtonGroup() {
  return (
    <>
      <div className="mode-buttons">
        <ModeButtons value="Instance Mode Recommended" />
        <ModeButtons value="Iframe Mode" />
        <ModeButtons value="Wordpress" />
        <ModeButtons value="Copy" />
      </div>
    </>
  );
}
