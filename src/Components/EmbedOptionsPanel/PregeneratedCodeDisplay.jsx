import React from "react";
import { Button } from "@mui/material";

export default function ModeCodeDisplay({
  embedCode,
  copied,
  handleCopy,
  editable,
}) {
  return (
    <div>
      <h4>Step 3: Copy your embed code</h4>
      <textarea
        readOnly={!editable}
        value={embedCode}
        rows="12"
        className="code-box"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleCopy}
        sx={{ mt: 1 }}
      >
        {copied ? "Copied!" : "Copy"}
      </Button>
    </div>
  );
}
