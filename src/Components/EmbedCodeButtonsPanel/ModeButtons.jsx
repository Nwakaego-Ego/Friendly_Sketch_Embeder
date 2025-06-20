import React from "react";
import "./ModeButtonGroup.css";

export default function ModeButtonGroup({ value }) {
  return (
    <>
      <div>
        <button className="instance-mode-button">{value}</button>
      </div>
    </>
  );
}
