import React from "react";
import DropDownMenu from "../DropDownOptions/DropDownMenu";
import EmbedOptions from "./EmbedOptions";

const EmbedOptionsPanel = ({
  mode,
  setMode,
  theme,
  setTheme,
  asset,
  setAsset,
}) => {
  return (
    <>
      <EmbedOptions
        label="Iframe Mode"
        value="Instance"
        dropdown={
          <DropDownMenu
            options={["Instance", "Global"]}
            selected={mode}
            onChange={setMode}
          />
        }
      />
      <EmbedOptions
        label="Theme"
        value="Dark Mood"
        dropdown={
          <DropDownMenu
            options={["Dark", "Light"]}
            selected={theme}
            onChange={setTheme}
          />
        }
      />
      <EmbedOptions
        label="Asset"
        value="Sound"
        dropdown={
          <DropDownMenu
            options={["Sound"]}
            selected={asset}
            onChange={setAsset}
          />
        }
      />
      <div className="embed-option-container">
        <button className="editable-mood-button ">Make Code Editable</button>
      </div>
    </>
  );
};

export default EmbedOptionsPanel;
