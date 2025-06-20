import React from "react";
import "./Preview.css";

const Preview = ({ code }) => {
  return (
    <div className="">
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
