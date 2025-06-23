import React, { useState } from "react";
import DropDownMenu from "./DropDownMenu";

const DropDownMenuOptions = () => {
  const [mode, setMode] = useState("Instance");
  const [theme, setTheme] = useState("light");
  const [asset, setAsset] = useState("Sound");

  return (
    <>
      <div>
        <DropDownMenu
          options={["Instance", "Global"]}
          selected={mode}
          onChange={setMode}
        />
        <DropDownMenu
          options={["Dark", "Light"]}
          selected={theme}
          onChange={setTheme}
        />
        <DropDownMenu
          options={["Sound"]}
          selected={asset}
          onChange={setAsset}
        />
      </div>
    </>
  );
};

export default DropDownMenuOptions;
