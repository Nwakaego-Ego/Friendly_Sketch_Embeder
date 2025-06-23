import React from "react";
import ModeButton from "./ModeButton";
import "./ModeButtonGroup.css";

export default function ModeButtonsGroup({ embedMode, setEmbedMode }) {
  return (
    <div className="mode-buttons">
      <ModeButton
        label="Instance Mode (Recommended)"
        isActive={embedMode === "instance"}
        onClick={() => {
          console.log("Instance button clicked");
          setEmbedMode("instance");
        }}
      />
      <ModeButton
        label="Iframe Mode"
        mode="iframe"
        isActive={embedMode === "iframe"}
        onClick={() => setEmbedMode("iframe")}
      />
      <ModeButton
        label="Global Mode"
        mode="global"
        isActive={embedMode === "global"}
        onClick={() => setEmbedMode("global")}
      />
    </div>
  );
}

// import React from "react";
// import ModeButtons from "./ModeButtons";
// import "./ModeButtonGroup.css";

// export default function ModeButtonGroup() {
//   return (
//     <>
//       <div className="mode-buttons">
//         <ModeButtons value="Instance Mode Recommended" />
//         <ModeButtons value="Iframe Mode" />
//         <ModeButtons value="Wordpress" />
//         <ModeButtons value="Copy" />
//       </div>
//     </>
//   );
// }
