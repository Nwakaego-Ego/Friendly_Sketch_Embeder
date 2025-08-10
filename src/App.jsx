import { useState, useMemo, useEffect } from "react";
import Editor from "./Components/EditorPreviewPanel/Editor";
import Preview from "./Components/EditorPreviewPanel/Preview";
import EmbedOptionsPanel from "./Components/EmbedOptionsPanel/EmbedOptionsPanel";
import EmbedCodeBox from "./Components/EmbedCodeButtonsPanel/EmbedCodeBox";
import ModeButtonsGroup from "./Components/EmbedCodeButtonsPanel/ModeButtonsGroup";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import {
  generateInstanceEmbed,
  generateGlobalEmbed,
  generateIframeEmbed,
  generateWordPressEmbedCode,
} from "./utils/EmbedUtils";

import "./App.css";

function App() {
  const [embedMode, setEmbedMode] = useState("instance");
  const [shouldRun, setShouldRun] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [code, setCode] = useState(`function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}`);
  const [copied, setCopied] = useState(false);

  const muiTheme = createTheme({
    palette: {
      mode: theme === "Dark" ? "dark" : "light",
    },
  });

  useEffect(() => {
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(theme === "Dark" ? "dark-mode" : "light-mode");
  }, [theme]);

  const embedCode = useMemo(() => {
    if (!embedMode) return;
    if (embedMode === "instance") {
      return generateInstanceEmbed(code);
    } else if (embedMode === "global") {
      return generateGlobalEmbed(code);
    } else if (embedMode === "wordpress") {
      return generateWordPressEmbedCode(code);
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
    <ThemeProvider theme={muiTheme}>
      <div className="app-theme">
        <div className="app-container">
          <Editor
            code={code}
            setCode={setCode}
            theme={theme}
            setTheme={setTheme}
          />
          <Preview code={shouldRun ? code : ""} />
        </div>
        <div className="embed-section">
          <div className="embed-option-wrapper">
            <EmbedOptionsPanel
              shouldRun={shouldRun}
              setShouldRun={setShouldRun}
              theme={theme}
              setTheme={setTheme}
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
      </div>
    </ThemeProvider>
  );
}

export default App;
