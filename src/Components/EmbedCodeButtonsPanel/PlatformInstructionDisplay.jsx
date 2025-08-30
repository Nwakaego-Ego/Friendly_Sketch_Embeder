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
    "Pick the embed mode above.",
    "Paste the code below and publish.",
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

  return (
    <div className="instructions-panel">
      <textarea
        readOnly
        value={instructionsText}
        rows={12}
        className="code-box"
      />
    </div>
  );
}
