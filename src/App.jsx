import { useState } from "react";
import Editor from "./Components/EditorPreviewPanel/Editor";
import Preview from "./Components/EditorPreviewPanel/Preview";
import EmbedOptionsPanel from "./Components/EmbedOptionsPanel/EmbedOptionsPanel";
// import EmbedCodeButtonsPanel from "./Components/EmbedCodeButtonsPanel/ModeButtonGroup";
import EmbedCodeBox from "./Components/EmbedCodeButtonsPanel/EmbedCodeBox";
import ModeButtonsGroup from "./Components/EmbedCodeButtonsPanel/ModeButtonsGroup";

import "./App.css";

function App() {
  const [embedMode, setEmbedMode] = useState(null);
  const [code, setCode] = useState(`(p) => {
    p.setup = function () {
      p.createCanvas(400, 400);
    };
    p.draw = function () {
      p.background(220);
      p.ellipse(p.width / 2, p.height / 2, 50, 50);
    };
  }`);

  return (
    <>
      <div className="app-container">
        <Editor code={code} setCode={setCode} />
        <Preview code={code} />
      </div>
      <div className="embed-section">
        <div className="embed-option-wrapper">
          <EmbedOptionsPanel />
        </div>
        <div className="embed-code-wrapper">
          <ModeButtonsGroup embedMode={embedMode} setEmbedMode={setEmbedMode} />
          <EmbedCodeBox
            embedMode={embedMode}
            code={code}
            setEmbedMode={setEmbedMode}
          />
        </div>
      </div>
    </>
  );
}

export default App;
