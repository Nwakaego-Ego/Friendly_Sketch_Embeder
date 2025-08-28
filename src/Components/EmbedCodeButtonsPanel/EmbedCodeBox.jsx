// import React, { useEffect, useState } from "react";
// import Button from "@mui/material/Button";
// import "./EmbedCodeBox.css";
// import {
//   generateInstanceEmbed,
//   generateGlobalEmbed,
//   generateIframeEmbed,
//   generateWordPressEmbedCode,
// } from "../../utils/EmbedUtils";

// const EmbedCodeBox = ({ code, embedMode, embedCode, editable, isActive }) => {
//   const [localEmbedCode, setLocalEmbedCode] = useState(embedCode);

//   useEffect(() => {
//     setLocalEmbedCode(embedCode);
//   }, [embedCode]);

//   const openInCodePen = () => {
//     let html = "";

//     if (embedMode === "instance") {
//       html = generateInstanceEmbed(code);
//     } else if (embedMode === "global") {
//       html = generateGlobalEmbed(code);
//     } else if (embedMode === "iframe") {
//       html = generateIframeEmbed(code);
//     } else if (embedMode === "wordpress") {
//       html = generateWordPressEmbedCode(code);
//     }

//     const data = {
//       title: "p5.js Sketch",
//       html: html,
//       js: "",
//       css: "",
//     };

//     const form = document.createElement("form");
//     form.action = "https://codepen.io/pen/define";
//     form.method = "POST";
//     form.target = "_blank";

//     const input = document.createElement("input");
//     input.type = "hidden";
//     input.name = "data";
//     input.value = JSON.stringify(data);

//     form.appendChild(input);
//     document.body.appendChild(form);
//     form.submit();
//     document.body.removeChild(form);
//   };

//   return (
//     <div>
//       <textarea
//         readOnly={!editable}
//         value={localEmbedCode}
//         rows="10"
//         className="code-box"
//         onChange={(e) => editable && setLocalEmbedCode(e.target.value)}
//       />

//       {/* <button onClick={openInCodePen}>Open in CodePen</button> */}
//       <Button
//         variant={isActive ? "contained" : "outlined"}
//         color={embedMode === "wordpress" ? "primary" : "secondary"}
//         onClick={openInCodePen}
//       >
//         Open in CodePen
//       </Button>
//     </div>
//   );
// };

// export default EmbedCodeBox;

// // // // code, embedcode and embedmode   the issue is how i am passiing this

// import React, { useEffect, useState } from "react";
// import Button from "@mui/material/Button";
// import "./EmbedCodeBox.css";
// import {
//   generateInstanceEmbed,
//   generateGlobalEmbed,
//   generateIframeEmbed,
//   generateWordPressEmbedCode,
// } from "../../utils/EmbedUtils";

// const pretty = (p) =>
//   p
//     ? p
//         .split(" ")
//         .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
//         .join(" ")
//     : "";

// const platformInstructions = {
//   wordpress: [
//     "Add a 'Custom HTML' block in the editor.",
//     "Click the embed mode you want above (Instance recommended).",
//     "Copy the code from the box below and paste it into the block.",
//     "Update/Publish your page.",
//   ],
//   blogger: [
//     "Switch the post editor to HTML mode.",
//     "Pick an embed mode above.",
//     "Copy the code below and paste where you want the sketch.",
//     "Save/Publish your post.",
//   ],
//   medium: [
//     "Medium accepts iframes. Pick Iframe Mode above.",
//     "Copy the code below.",
//     "Use the Embed option and paste the iframe code.",
//     "Publish.",
//   ],
//   "p. website": [
//     "Open your page’s HTML.",
//     "Pick an embed mode above (Instance recommended).",
//     "Paste the code below where you want the sketch.",
//     "Save and deploy.",
//   ],
//   notion: [
//     "Use /Embed block in Notion.",
//     "Pick Iframe Mode above.",
//     "Copy the code below and paste into the embed block.",
//   ],
//   squarespace: [
//     "Use a 'Code' block.",
//     "Pick an embed mode above (Iframe works well).",
//     "Paste the code below and save.",
//   ],
//   webflow: [
//     "Use an 'Embed' component.",
//     "Pick an embed mode above.",
//     "Paste the code below and publish.",
//   ],
//   wix: [
//     "Add an Embed widget (Custom Embeds → Embed a Widget).",
//     "Pick an embed mode above.",
//     "Paste the code below.",
//   ],
//   godaddy: [
//     "Add an HTML section to your page.",
//     "Pick an embed mode above.",
//     "Paste the code below and publish.",
//   ],
// };

// const EmbedCodeBox = ({
//   code,
//   embedMode,
//   embedCode,
//   editable,
//   isActive,
//   selectedPlatform, // <-- NEW
// }) => {
//   const [localEmbedCode, setLocalEmbedCode] = useState(embedCode);

//   useEffect(() => {
//     setLocalEmbedCode(embedCode);
//   }, [embedCode]);

//   const openInCodePen = () => {
//     let html = "";
//     if (embedMode === "instance") html = generateInstanceEmbed(code);
//     else if (embedMode === "global") html = generateGlobalEmbed(code);
//     else if (embedMode === "iframe") html = generateIframeEmbed(code);
//     else if (embedMode === "wordpress") html = generateWordPressEmbedCode(code);

//     const data = { title: "p5.js Sketch", html, js: "", css: "" };
//     const form = document.createElement("form");
//     form.action = "https://codepen.io/pen/define";
//     form.method = "POST";
//     form.target = "_blank";

//     const input = document.createElement("input");
//     input.type = "hidden";
//     input.name = "data";
//     input.value = JSON.stringify(data);
//     form.appendChild(input);
//     document.body.appendChild(form);
//     form.submit();
//     document.body.removeChild(form);
//   };

//   const steps = selectedPlatform
//     ? platformInstructions[selectedPlatform]
//     : null;

//   return (
//     <div>
//       {/* Platform-specific instructions */}
//       {selectedPlatform && steps && (
//         <div className="instructions-panel">
//           <h3>How to embed on {pretty(selectedPlatform)}</h3>
//           <p>
//             <strong>Recommended:</strong> Instance Mode (supports multiple
//             sketches on one page). You can still choose Global or Iframe above.
//           </p>
//           <ol>
//             {steps.map((s, i) => (
//               <li key={i}>{s}</li>
//             ))}
//           </ol>
//         </div>
//       )}

//       <textarea
//         readOnly={!editable}
//         value={localEmbedCode}
//         rows="10"
//         className="code-box"
//         onChange={(e) => editable && setLocalEmbedCode(e.target.value)}
//       />

//       <Button
//         variant={isActive ? "contained" : "outlined"}
//         color={embedMode === "wordpress" ? "primary" : "secondary"}
//         onClick={openInCodePen}
//       >
//         Open in CodePen
//       </Button>
//     </div>
//   );
// };

// export default EmbedCodeBox;

// ........................................................

// Components/EmbedCodeButtonsPanel/EmbedCodeBox.jsx
import React, { useEffect, useMemo, useState } from "react";
import Button from "@mui/material/Button";
import "./EmbedCodeBox.css";
import {
  generateInstanceEmbed,
  generateGlobalEmbed,
  generateIframeEmbed,
  generateWordPressEmbedCode,
} from "../../utils/EmbedUtils";

const pretty = (p) =>
  p
    ? p
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    : "";

const platformInstructions = {
  wordpress: [
    "Add a 'Custom HTML' block in the editor.",
    "Click the embed mode you want above (Instance recommended).",
    "Copy the code from the box below and paste it into the block.",
    "Update/Publish your page.",
  ],
  blogger: [
    "Switch the post editor to HTML mode.",
    "Pick an embed mode above.",
    "Copy the code below and paste where you want the sketch.",
    "Save/Publish your post.",
  ],
  medium: [
    "Medium accepts iframes. Pick Iframe Mode above.",
    "Copy the code below.",
    "Use the Embed option and paste the iframe code.",
    "Publish.",
  ],
  "p. website": [
    "Open your page’s HTML.",
    "Pick an embed mode above (Instance recommended).",
    "Paste the code below where you want the sketch.",
    "Save and deploy.",
  ],
  notion: [
    "Use /Embed block in Notion.",
    "Pick Iframe Mode above.",
    "Copy the code below and paste into the embed block.",
  ],
  squarespace: [
    "Use a 'Code' block.",
    "Pick an embed mode above (Iframe works well).",
    "Paste the code below and save.",
  ],
  webflow: [
    "Use an 'Embed' component.",
    "Pick an embed mode above.",
    "Paste the code below and publish.",
  ],
  wix: [
    "Add an Embed widget (Custom Embeds → Embed a Widget).",
    "Pick an embed mode above.",
    "Paste the code below.",
  ],
  godaddy: [
    "Add an HTML section to your page.",
    "Pick an embed mode above.",
    "Paste the code below and publish.",
  ],
};

export default function EmbedCodeBox({
  code,
  embedMode,
  embedCode,
  editable,
  isActive,
  selectedPlatform,
}) {
  const [localEmbedCode, setLocalEmbedCode] = useState(embedCode || "");

  const [displayType, setDisplayType] = useState("mode");

  useEffect(() => {
    setLocalEmbedCode(embedCode || "");
  }, [embedCode]);

  useEffect(() => {
    if (selectedPlatform) {
      setDisplayType("platform");
    }
  }, [selectedPlatform]);

  useEffect(() => {
    if (embedMode && embedMode !== "null") {
      setDisplayType("mode");
    }
  }, [embedMode]);

  const steps = selectedPlatform
    ? platformInstructions[selectedPlatform]
    : null;

  const textareaContent = useMemo(() => {
    if (displayType === "mode") {
      return localEmbedCode;
    }

    if (displayType === "platform" && steps) {
      const header = `How to embed on ${pretty(selectedPlatform)}\n\nRecommended: Instance Mode (supports multiple sketches on one page). You can still choose Global or Iframe above.\n\n`;
      const body = steps.map((s, i) => `${i + 1}. ${s}`).join("\n");
      return header + body;
    }

    return "";
  }, [displayType, localEmbedCode, selectedPlatform, steps]);

  const openInCodePen = () => {
    let html = "";
    if (embedMode === "instance") html = generateInstanceEmbed(code);
    else if (embedMode === "global") html = generateGlobalEmbed(code);
    else if (embedMode === "iframe") html = generateIframeEmbed(code);
    else if (embedMode === "wordpress") html = generateWordPressEmbedCode(code);

    const data = { title: "p5.js Sketch", html, js: "", css: "" };
    const form = document.createElement("form");
    form.action = "https://codepen.io/pen/define";
    form.method = "POST";
    form.target = "_blank";
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "data";
    input.value = JSON.stringify(data);
    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  };

  return (
    <div>
      <h4>Step 3: Follow the steps below to add your sketch to your website</h4>
      <textarea
        readOnly={!editable || displayType === "platform"}
        value={textareaContent}
        rows="12"
        className="code-box"
        onChange={(e) => {
          if (editable && displayType === "mode") {
            setLocalEmbedCode(e.target.value);
          }
        }}
      />

      <Button
        variant={isActive ? "contained" : "outlined"}
        color={embedMode === "wordpress" ? "primary" : "secondary"}
        onClick={openInCodePen}
        sx={{ mt: 1 }}
      >
        Open in CodePen
      </Button>
    </div>
  );
}
