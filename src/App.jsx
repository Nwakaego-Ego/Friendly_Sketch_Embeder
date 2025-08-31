import { useState, useMemo, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Editor from "./Components/EditorPreviewPanel/Editor";
import Preview from "./Components/EditorPreviewPanel/Preview";

import EmbedPlatformSelector from "./Components/EmbedCodeButtonsPanel/EmbedPlatfromSelector";
import EmbedCodeBox from "./Components/EmbedCodeButtonsPanel/EmbedCodeBox";
import DarkModeEditableControls from "./Components/EmbedOptionsPanel/DarkModeEditableControls";
import WelcomeModal from "./Components/Modals/WelcomeModal";

import {
  generateInstanceEmbed,
  generateGlobalEmbed,
  generateIframeEmbed,
  generateWordPressEmbedCode,
} from "./utils/EmbedUtils";

import "./App.css";

function App() {
  const [embedMode, setEmbedMode] = useState("null");
  const [theme, setTheme] = useState("dark");
  const [editable, setEditable] = useState(false);
  const [shouldRun, setShouldRun] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const [code, setCode] = useState(() => {
    const saved = localStorage.getItem("lastSketch");
    return saved && saved !== "null"
      ? saved
      : `function setup() { createCanvas(400, 400); } function draw() { background(220); }`;
  });

  useEffect(() => {
    localStorage.setItem("lastSketch", code);
  }, [code]);

  const [copied, setCopied] = useState(false);

  const muiTheme = createTheme({
    palette: { mode: theme === "Dark" ? "dark" : "light" },
  });

  useEffect(() => {
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(theme === "Dark" ? "dark-mode" : "light-mode");
  }, [theme]);

  const embedCode = useMemo(() => {
    if (!embedMode || embedMode === "null") return "";
    if (embedMode === "instance") return generateInstanceEmbed(code);
    if (embedMode === "global") return generateGlobalEmbed(code);
    if (embedMode === "wordpress") return generateWordPressEmbedCode(code);
    return generateIframeEmbed(code);
  }, [embedMode, code]);

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  //   return (
  //     <div>
  //       <h2 className="project-title">P5.js Sketch Embedder Tool</h2>

  //       <ThemeProvider theme={muiTheme}>
  //         <div className={`app-theme ${isModalOpen ? "app-blurred" : ""}`}>
  //           <WelcomeModal
  //             isOpen={isModalOpen}
  //             onClose={() => setIsModalOpen(false)}
  //           />

  //           <div className="app-container">
  //             <div className="editor-preview-row">
  //               <h4 className="step-1">
  //                 Step 1: Copy and paste your code into the editor below and preview your
  //                 sketch
  //               </h4>
  //               <div>
  //                 <Editor
  //                     code={code}
  //                     setCode={setCode}
  //                     theme={theme}
  //                     shouldRun={shouldRun}
  //                     setShouldRun={setShouldRun}
  //                 />
  //               </div>

  //               <Preview code={code} shouldRun={shouldRun}/>

  //               <EmbedCodeBox
  //                   code={code}
  //                   embedMode={embedMode}
  //                   embedCode={embedCode}
  //                   copied={copied}
  //                   handleCopy={handleCopy}
  //                   selectedPlatform={selectedPlatform}
  //                   setEmbedMode={setEmbedMode}
  //                 />
  //               </div>

  //               <div className="preview-column">
  //                 <Preview code={code} shouldRun={shouldRun} />

  //                 {/* <EmbedPlatformSelector

  //               /> */}

  //               <EmbedPlatformSelector
  //                   embedMode={embedMode}
  //                   setEmbedMode={setEmbedMode}
  //                   selectedPlatform={selectedPlatform}
  //                   setSelectedPlatform={setSelectedPlatform}
  //                 />
  //               </div>
  // =======
  //               />
  //             </div>
  //           </div>
  //         </div>
  //       </ThemeProvider>
  //     </div>
  //   );

  return (
    <div>
      <h2 className="project-title">P5.js Sketch Embedder Tool</h2>

      <ThemeProvider theme={muiTheme}>
        <div className={`app-theme ${isModalOpen ? "app-blurred" : ""}`}>
          <WelcomeModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />

          <div className="app-container">
            <div className="editor-preview-row">
              <h4 className="step-1">
                Step 1: Copy and paste your code into the editor below and
                preview your sketch
              </h4>
              <div>
                <Editor
                  code={code}
                  setCode={setCode}
                  theme={theme}
                  shouldRun={shouldRun}
                  setShouldRun={setShouldRun}
                />
              </div>

              <Preview code={code} shouldRun={shouldRun} />

              <EmbedCodeBox
                code={code}
                embedMode={embedMode}
                embedCode={embedCode}
                copied={copied}
                handleCopy={handleCopy}
                selectedPlatform={selectedPlatform}
                setEmbedMode={setEmbedMode}
              />
            </div>

            {/* <div className="preview-column"> */}
            {/* <Preview code={code} shouldRun={shouldRun} /> */}

            {/* <EmbedPlatformSelector /> */}

            <EmbedPlatformSelector
              embedMode={embedMode}
              setEmbedMode={setEmbedMode}
              selectedPlatform={selectedPlatform}
              setSelectedPlatform={setSelectedPlatform}
            />
            {/* </div> */}
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
