import React from "react";
import "./EmbedInstructionModal.css";

const platforms = [
  "wordpress",
  "medium",
  "godaddy",
  "webflow",
  "wix",
  "notion",
  "squarespace",
  "p. website",
  "blogger",
];

function titleize(s) {
  return s
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function EmbedInstructionModal({ isOpen, onClose, onPlatformSelect }) {
  if (!isOpen) return null;

  const handleClick = (platform) => {
    onPlatformSelect(platform);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Where will you be Embedding your Sketch?</h3>

        <div className="platform-grid">
          {platforms.map((p) => (
            <button
              key={p}
              className="platform-btn"
              onClick={() => handleClick(p)}
            >
              {titleize(p)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EmbedInstructionModal;
