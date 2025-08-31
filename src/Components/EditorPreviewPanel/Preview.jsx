import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./Preview.css";

const Preview = ({ code, shouldRun }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        overflow: "hidden",
        borderRadius: 1,
        border: "1px solid #ccc",
        minHeight: "30vh",
      }}
    >
      {shouldRun ? (
        <iframe
          title="Sketch Preview"
          srcDoc={`<!DOCTYPE html>
              <html>
                <head>
                  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script>
                  <style>
                    body, html { padding: 0; margin: 0; height: 100%; width: 100%;}
                    main { width: 100%; height: 100%; }
                    canvas { width: 100%; height: 100%; }
                  </style>
                </head>
                <body>
                  <script>${code}</script>
                </body>
              </html>`}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
          className="preview"
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f6f6f6",
            color: "#999",
            fontStyle: "italic",
            border: "1px solid #d9d9d9",
          }}
        >
          Preview Paused
        </div>
      )}
    </Paper>
  );
};

export default Preview;
