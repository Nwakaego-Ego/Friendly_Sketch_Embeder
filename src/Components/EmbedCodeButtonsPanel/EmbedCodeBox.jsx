// import "./EmbedCodeBox.css";

// const EmbedCodeBox = ({ embedCode }) => {
//   console.log(embedCode);

//   return (
//     <div className="">
//       <textarea readOnly value={embedCode} rows="10" className="code-box" />
//     </div>
//   );
// };

// export default EmbedCodeBox;

import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import "./EmbedCodeBox.css";
import {
  generateInstanceEmbed,
  generateGlobalEmbed,
  generateIframeEmbed,
  generateWordPressEmbedCode,
} from "../../utils/EmbedUtils";

const EmbedCodeBox = ({ code, embedMode, embedCode, editable, isActive }) => {
  const [localEmbedCode, setLocalEmbedCode] = useState(embedCode);

  useEffect(() => {
    setLocalEmbedCode(embedCode);
  }, [embedCode]);

  const openInCodePen = () => {
    let html = "";

    if (embedMode === "instance") {
      html = generateInstanceEmbed(code);
    } else if (embedMode === "global") {
      html = generateGlobalEmbed(code);
    } else if (embedMode === "iframe") {
      html = generateIframeEmbed(code);
    } else if (embedMode === "wordpress") {
      html = generateWordPressEmbedCode(code);
    }

    // Build data object for CodePen
    const data = {
      title: "p5.js Sketch",
      html: html,
      js: "", // optional, leave blank if all JS is inside HTML
      css: "", // optional
    };

    // Create a hidden form to POST data to CodePen
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
      <textarea
        readOnly={!editable}
        value={localEmbedCode}
        rows="10"
        className="code-box"
        onChange={(e) => editable && setLocalEmbedCode(e.target.value)}
      />

      {/* <button onClick={openInCodePen}>Open in CodePen</button> */}
      <Button
        variant={isActive ? "contained" : "outlined"}
        color={embedMode === "wordpress" ? "primary" : "secondary"}
        onClick={openInCodePen}
      >
        Open in CodePen
      </Button>
    </div>
  );
};

export default EmbedCodeBox;

// // // code, embedcode and embedmode   the issue is how i am passiing this
