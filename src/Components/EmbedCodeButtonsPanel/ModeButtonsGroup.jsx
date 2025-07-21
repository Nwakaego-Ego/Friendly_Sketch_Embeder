// import React from "react";
// import ModeButton from "./ModeButton";
// import "./ModeButtonGroup.css";

// export default function ModeButtonsGroup({
//   embedMode,
//   setEmbedMode,
//   copied,
//   setCopied,
//   embedCode,
//   handleCopy,
// }) {
//   return (
//     <div className="mode-buttons">
//       <ModeButton
//         label="Instance Mode (Recommended)"
//         isActive={embedMode === "instance"}
//         onClick={() => {
//           console.log("Instance button clicked");
//           setEmbedMode("instance");
//         }}
//       />
//       <ModeButton
//         label="Iframe Mode"
//         mode="iframe"
//         isActive={embedMode === "iframe"}
//         onClick={() => setEmbedMode("iframe")}
//       />
//       <ModeButton
//         label="Global Mode"
//         mode="global"
//         isActive={embedMode === "global"}
//         onClick={() => setEmbedMode("global")}
//       />
//       <ModeButton
//         label={copied ? "Copied" : "Copy Code"}
//         onClick={handleCopy}
//       />
//     </div>
//   );
// }

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
        label="Instance Mode (Recommended)"
        isActive={embedMode === "instance"}
        onClick={() => setEmbedMode("instance")}
      />
      <ModeButton
        label="Iframe Mode"
        isActive={embedMode === "iframe"}
        onClick={() => setEmbedMode("iframe")}
      />
      <ModeButton
        label="Global Mode"
        isActive={embedMode === "global"}
        onClick={() => setEmbedMode("global")}
      />
      <ModeButton
        label="Wordpress"
        isActive={embedMode === "wordpress"}
        onClick={() => setEmbedMode("wordpress")}
      />
      <ModeButton
        label={copied ? "Copied" : "Copy Code"}
        isActive={false}
        onClick={handleCopy}
      />
    </Stack>
  );
}
