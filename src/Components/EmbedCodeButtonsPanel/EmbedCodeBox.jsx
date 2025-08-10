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

import React from "react";
import "./EmbedCodeBox.css";
import {
  generateInstanceEmbed,
  generateGlobalEmbed,
  generateIframeEmbed,
} from "../../utils/EmbedUtils";

const EmbedCodeBox = ({ code, embedMode, embedCode }) => {
  const openInCodePen = () => {
    let html = "";

    if (mode === "instance") {
      html = generateInstanceEmbed(code);
    } else if (mode === "global") {
      html = generateGlobalEmbed(code);
    } else if (mode === "iframe") {
      html = generateIframeEmbed(code);
    }

    const data = {
      title: "p5.js Sketch",
      html,
    };

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
      {/* <textarea
        readOnly
        value={generateEmbedPreview(userCode, mode)}
        rows="10"
        className="code-box"
      /> */}
      <textarea readOnly value={embedCode} rows="10" className="code-box" />
      <button onClick={openInCodePen}>Open in CodePen</button>
    </div>
  );
};

// helper so textarea shows correct embed code preview
function generateEmbedPreview(userCode, mode) {
  if (mode === "instance") return generateInstanceEmbed(userCode);
  if (mode === "global") return generateGlobalEmbed(userCode);
  if (mode === "iframe") return generateIframeEmbed(userCode);
  return "";
}

export default EmbedCodeBox;
