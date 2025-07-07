import { useState, useMemo } from "react";
import Editor from "./Components/EditorPreviewPanel/Editor";
import Preview from "./Components/EditorPreviewPanel/Preview";
import EmbedOptionsPanel from "./Components/EmbedOptionsPanel/EmbedOptionsPanel";
import EmbedCodeBox from "./Components/EmbedCodeButtonsPanel/EmbedCodeBox";
import ModeButtonsGroup from "./Components/EmbedCodeButtonsPanel/ModeButtonsGroup";
import {
  generateInstanceEmbed,
  generateGlobalEmbed,
  generateIframeEmbed,
} from "./utils/EmbedUtils";

import "./App.css";

function App() {
  const [embedMode, setEmbedMode] = useState(null);
  const [shouldRun, setShouldRun] = useState(false);
  const [code, setCode] = useState(`function setup() {
          createCanvas(400, 400);
        }

        function draw() {
          background(220);
        }`);
  const [copied, setCopied] = useState(false);

  // const [theme, setTheme] = useState("Dark");
  // const [asset, setAsset] = useState("Sound");
  // const [editable, setEditable] = useState(false);

  const embedCode = useMemo(() => {
    if (!embedMode) return;
    if (embedMode === "instance") {
      return generateInstanceEmbed(code);
    } else if (embedMode === "global") {
      return generateGlobalEmbed(code);
    } else {
      return generateIframeEmbed(code);
    }
  }, [embedMode, code]);

  console.log(generateInstanceEmbed(code));

  console.log(embedCode);

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="app-container">
        <Editor code={code} setCode={setCode} />
        <Preview code={shouldRun ? code : ""} />
      </div>
      <div className="embed-section">
        <div className="embed-option-wrapper">
          {/* <EmbedOptionsPanel
            theme={theme}
            setTheme={setTheme}
            asset={asset}
            setAsset={setAsset}
            editable={editable}
            setEditable={setEditable}
            shouldRun={shouldRun}
            setShouldRun={setShouldRun}
          /> */}
          <EmbedOptionsPanel
            shouldRun={shouldRun}
            setShouldRun={setShouldRun}
          />
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
            embedCode={embedCode}
          />
        </div>
      </div>
    </>
  );
}

export default App;
