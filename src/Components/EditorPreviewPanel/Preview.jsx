import React, { useEffect } from "react";
import { generateInstanceEmbed } from "../../utils/EmbedUtils";
import "./Preview.css";

const Preview = ({ code, shouldRun }) => {
  const instanceWrapper = generateInstanceEmbed(code);

  useEffect(() => {
    if (!code || !shouldRun) return;

    const sketch = new p5();

    return () => {
      sketch.remove();
    };
  }, [code, shouldRun]);

  return (
    <div>
      {" "}
      <iframe
        srcDoc={`
    <!DOCTYPE html>
    <html>
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script>
      </head>
      <body>
        <script>${code}</script>
      </body>
    </html>
  `}
        className="preview-box"
      />
    </div>
  );
};

export default Preview;
