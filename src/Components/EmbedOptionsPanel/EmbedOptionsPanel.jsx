import React from "react";
import EmbedOptions from "./EmbedOptions";

const EmbedOptionsPanel = () => {
  return (
    <>
      <EmbedOptions label="Iframe Mode" value="Instance" />
      {/* <EmbedOptions label="Theme" value="Dark" /> */}
      <EmbedOptions label="Theme" value="Dark" />
      <EmbedOptions label="Asset" value="Sound" />
      <div className="embed-option-container">
        <button className="editable-mood-button ">Make Code Editable</button>
      </div>
    </>
  );
};

export default EmbedOptionsPanel;
