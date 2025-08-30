import React, { useState, useMemo, useEffect } from "react";
import Button from "@mui/material/Button";
import ModeButtonsGroup from "../EmbedOptionsPanel/ModeButtonsGroup";
import {
  generateInstanceEmbed,
  generateGlobalEmbed,
  generateIframeEmbed,
  generateWordPressEmbedCode,
} from "../../utils/EmbedUtils";
import "./EmbedCodeBox.css";

export default function EmbedCodeBox({
  code,
  embedMode,
  setEmbedMode,
  copied,
  handleCopy,
}) {
  const embedCode = useMemo(() => {
    if (!embedMode || embedMode === "null") return "";
    if (embedMode === "instance") return generateInstanceEmbed(code);
    if (embedMode === "global") return generateGlobalEmbed(code);
    if (embedMode === "wordpress") return generateWordPressEmbedCode(code);
    return generateIframeEmbed(code);
  }, [embedMode, code]);

  const openInCodePen = () => {
    const html =
      embedMode === "instance"
        ? generateInstanceEmbed(code)
        : embedMode === "global"
          ? generateGlobalEmbed(code)
          : embedMode === "wordpress"
            ? generateWordPressEmbedCode(code)
            : generateIframeEmbed(code);

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
      <h4>Step 3: Choose your embed mode and copy code</h4>
      <ModeButtonsGroup
        embedMode={embedMode}
        setEmbedMode={setEmbedMode}
        copied={copied}
        handleCopy={handleCopy}
      />
      <textarea readOnly value={embedCode} rows={12} className="code-box" />
      <Button
        variant="outlined"
        color="primary"
        onClick={openInCodePen}
        sx={{ mt: 1 }}
      >
        Open in CodePen
      </Button>
    </div>
  );
}
