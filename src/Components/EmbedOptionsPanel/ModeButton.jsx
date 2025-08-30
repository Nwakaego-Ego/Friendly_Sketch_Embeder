import React from "react";
import Button from "@mui/material/Button";

export default function ModeButton({ label, isActive, onClick }) {
  return (
    <div>
      <Button
        variant={isActive ? "contained" : "outlined"}
        color={label.toLowerCase().includes("copy") ? "primary" : "secondary"}
        onClick={onClick}
        sx={{
          fontSize: "0.8rem",
          minHeight: "36px",
          padding: "4px 12px",
          textTransform: "none",
          borderRadius: "6px",
        }}
      >
        {label}
      </Button>
    </div>
  );
}
