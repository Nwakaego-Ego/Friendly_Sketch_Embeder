import React from "react";
import "./Editor.css";

const Editor = ({ code, setCode }) => {
  return (
    <div>
      <textarea
        className="input-code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        // placeholder={`function setup() {
        //   createCanvas(400, 400);
        // }

        // function draw() {
        //   background(220);
        // }`}
      />
    </div>
  );
};

export default Editor;
