import { useState } from "react";
import Editor from "./Components/EditorPreviewPanel/Editor";
import Preview from "./Components/EditorPreviewPanel/Preview";
import EmbedOptionsPanel from "./Components/EmbedOptionsPanel/EmbedOptionsPanel";
import EmbedCodeButtonsPanel from "./Components/EmbedCodeButtonsPanel/ModeButtonGroup";
import EmbedCodeBox from "./Components/EmbedCodeButtonsPanel/EmbedCodeBox";
import "./App.css";

function App() {
  const [code, setCode] = useState("");

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
          <EmbedCodeButtonsPanel />
          <EmbedCodeBox />
        </div>
      </div>
    </>
  );
}

export default App;
