import { useState } from "react";
import Editor from "./Components/EditorPreviewPanel/Editor";
import Preview from "./Components/EditorPreviewPanel/Preview";
import EmbedOptionsPanel from "./Components/EmbedOptionsPanel/EmbedOptionsPanel";
// import EmbedCodeButtonsPanel from "./Components/EmbedCodeButtonsPanel/ModeButtonGroup";
import EmbedCodeBox from "./Components/EmbedCodeButtonsPanel/EmbedCodeBox";
import ModeButtonsGroup from "./Components/EmbedCodeButtonsPanel/ModeButtonsGroup";
import { generateInstanceEmbed } from "./utils/EmbedUtils";

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
  const [copied, setCopied] = useState(false);

  // const [mode, setMode] = useState("Instance");
  // const [theme, setTheme] = useState("Dark");
  // const [asset, setAsset] = useState("Sound");
  // const [editable, setEditable] = useState(false);

  let embedCode = "";
  if (embedMode === "instance") {
    embedCode = generateInstanceEmbed(code);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="app-container">
        <Editor code={code} setCode={setCode} />
        <Preview code={code} />
      </div>
      <div className="embed-section">
        <div className="embed-option-wrapper">
          {/* <EmbedOptionsPanel
            mode={mode}
            setMode={setMode}
            theme={theme}
            setTheme={setTheme}
            asset={asset}
            setAsset={setAsset}
            editable={editable}
            setEditable={setEditable}
          /> */}
          <EmbedOptionsPanel />
        </div>
        <div className="embed-code-wrapper">
          <ModeButtonsGroup
            embedMode={embedMode}
            setEmbedMode={setEmbedMode}
            copied={copied}
            setCopied={setCopied}
            embedCode={embedCode}
            handleCopy={handleCopy}
          />
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
