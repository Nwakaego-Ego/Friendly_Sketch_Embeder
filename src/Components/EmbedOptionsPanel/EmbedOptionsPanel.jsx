// import React from "react";
// import DropDownMenu from "../DropDownOptions/DropDownMenu";
// import EmbedOptions from "./EmbedOptions";

// const EmbedOptionsPanel = ({
//   mode,
//   setMode,
//   theme,
//   setTheme,
//   asset,
//   setAsset,
// }) => {
//   return (
//     <>
//       <EmbedOptions
//         label="Iframe Mode"
//         value="Instance"
//         dropdown={
//           <DropDownMenu
//             options={["Instance", "Global"]}
//             selected={mode}
//             onChange={setMode}
//           />
//         }
//       />
//       <EmbedOptions
//         label="Theme"
//         value="Dark Mood"
//         dropdown={
//           <DropDownMenu
//             options={["Dark", "Light"]}
//             selected={theme}
//             onChange={setTheme}
//           />
//         }
//       />
//       <EmbedOptions
//         label="Asset"
//         value="Sound"
//         dropdown={
//           <DropDownMenu
//             options={["Sound"]}
//             selected={asset}
//             onChange={setAsset}
//           />
//         }
//       />
//       <div className="embed-option-container">
//         <button className="editable-mood-button ">Make Code Editable</button>
//       </div>
//     </>
//   );
// };

// export default EmbedOptionsPanel;

import React from "react";
import EmbedOptions from "./EmbedOptions";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import PlayPauseButtons from "../EmbedOptionsPanel/PlayPauseButtons";

const EmbedOptionsPanel = ({
  mode,
  setMode,
  theme,
  setTheme,
  asset,
  setAsset,
  editable,
  setEditable,
  setShouldRun,
  shouldRun,
}) => {
  return (
    <Box sx={{ px: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2, mt: 4 }}>
        <strong>Sketch Controls:</strong>
        <PlayPauseButtons shouldRun={shouldRun} setShouldRun={setShouldRun} />
      </Box>

      <EmbedOptions
        label="Theme"
        value={theme}
        options={["Dark", "Light"]}
        onChange={setTheme}
      />
      <EmbedOptions
        label="Asset"
        value={asset}
        options={["Sound"]}
        onChange={setAsset}
      />
      <Box sx={{ mt: 3 }}>
        <FormControlLabel
          control={
            <Switch
              checked={editable}
              onChange={() => setEditable((prev) => !prev)}
              color="primary"
            />
          }
          label="Make Code Editable"
        />
      </Box>
    </Box>
  );
};

export default EmbedOptionsPanel;
