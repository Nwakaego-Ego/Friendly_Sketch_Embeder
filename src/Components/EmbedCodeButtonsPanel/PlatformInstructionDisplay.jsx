import React, { useMemo } from "react";
import "./PlatformInstructionDisplay.css";

const pretty = (p) =>
  p
    ? p
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    : "";

const platformInstructions = {
  wordpress: [
    "Open your post/page in the WordPress editor.",
    "Add a 'Custom HTML' block.",
    "Paste the CodePen embed link you copied.",
    "Update/Publish your page.",
  ],
  blogger: [
    "Go to your Blogger post editor.",
    "Switch to 'HTML view'.",
    "Paste the CodePen embed link where you want it to appear.",
    "Switch back to 'Compose view' to continue editing.",
    "Publish your post.",
  ],
  medium: [
    "Open your Medium story draft.",
    "Click on the `+` button click on `Add an embed`",
    "Paste the CodePen link directly on a new line.",
    "Medium will automatically convert it into an embed.",
    "Publish your story.",
  ],
  website: [
    "Open your website project files.",
    "On codepen use the iframe mode",
    "Paste the CodePen embed `<iframe>` code inside your HTML where you want the sketch.",
    "Save the file and upload/deploy your website.",
  ],
  notion: [
    "Open the Notion page where you want to embed.",
    "Type /embed and choose 'Embed'.",
    "Paste the CodePen link into the embed block.",
    "Resize the block as needed.",
  ],
  squarespace: [
    "Edit the page or blog post in Squarespace.",
    "Add a 'Code' block where you want the sketch.",
    "Paste the CodePen embed link.",
    "Save and publish the page.",
  ],
  webflow: [
    "Open your Webflow project.",
    "Drag an 'Embed' component into your page.",
    "Paste the CodePen embed link.",
    "Save and publish the site.",
  ],
  wix: [
    "Go to the Wix Editor.",
    "Click 'Add' → 'Embed Code' → 'Embed a Widget'.",
    "Paste the CodePen embed link.",
    "Publish your site.",
  ],
  godaddy: [
    "Log in to your GoDaddy website editor.",
    "Go to the section where you want the embed.",
    "Click 'Add Section' → 'HTML'.",
    "Paste the CodePen embed link.",
    "Save and publish the site.",
  ],
  codepen: [
    "Click the 'Open in CodePen' button above.",
    "Save to get the codepen link.",
    "Click 'embed' ",
    "On the code panel by your right, where you have <<<<<<Span `see the pen` ...copy the link .e.g https://codepen.io/Nwakaego/pen/qEOJLra  and use in any platform of your choice",
  ],
};

export default function PlatformInstructionDisplay({ selectedPlatform }) {
  const steps =
    selectedPlatform && platformInstructions[selectedPlatform]
      ? platformInstructions[selectedPlatform]
      : ["Select a platform above to see instructions here."];

  const instructionsText = useMemo(() => {
    if (!steps.length) return "";
    const header = selectedPlatform
      ? `How to embed on ${pretty(selectedPlatform)}:\n\nRecommended: Instance Mode (supports multiple sketches on one page).\n\n`
      : "";
    const body = steps.map((s, i) => `${i + 1}. ${s}`).join("\n");
    return header + body;
  }, [selectedPlatform, steps]);

  return <div className="instructions-panel">{instructionsText}</div>;
}
