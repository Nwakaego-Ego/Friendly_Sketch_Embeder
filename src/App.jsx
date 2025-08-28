// import { useState, useMemo, useEffect } from "react";
// import Editor from "./Components/EditorPreviewPanel/Editor";
// import Preview from "./Components/EditorPreviewPanel/Preview";
// import EmbedOptionsPanel from "./Components/EmbedOptionsPanel/EmbedOptionsPanel";
// import EmbedCodeBox from "./Components/EmbedCodeButtonsPanel/EmbedCodeBox";
// import ModeButtonsGroup from "./Components/EmbedCodeButtonsPanel/ModeButtonsGroup";
// import EmbedInstructionModal from "./Components/EmbedCodeButtonsPanel/EmbedInstructionModal";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

// import {
//   generateInstanceEmbed,
//   generateGlobalEmbed,
//   generateIframeEmbed,
//   generateWordPressEmbedCode,
// } from "./utils/EmbedUtils";

// import "./App.css";

// function App() {
//   const [embedMode, setEmbedMode] = useState("null");
//   const [shouldRun, setShouldRun] = useState(false);
//   const [theme, setTheme] = useState("dark");
//   const [editable, setEditable] = useState(false);
//   // const [code, setCode] = useState(() => {
//   //   return (
//   //     localStorage.getItem("lastSketch") ||
//   //     `function setup() {
//   //     createCanvas(400, 400);
//   //   }

//   //   function draw() {
//   //     background(220);
//   //   }`
//   //   );
//   // });

//   const [selectedPlatform, setSelectedPlatform] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(true);

//   const [code, setCode] = useState(() => {
//     const saved = localStorage.getItem("lastSketch");
//     if (!saved || saved === "null") {
//       return `function setup() {
//     createCanvas(400, 400);
//   }

//   function draw() {
//     background(220);
//   }`;
//     }
//     return saved;
//   });

//   const handlePlatformClick = (platform) => {
//     setSelectedPlatform(platform);
//     setIsModalOpen(true);
//   };

//   // close modal
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedPlatform(null);
//   };

//   useEffect(() => {
//     localStorage.setItem("lastSketch", code);
//   }, [code]);

//   const [copied, setCopied] = useState(false);

//   const muiTheme = createTheme({
//     palette: {
//       mode: theme === "Dark" ? "dark" : "light",
//     },
//   });

//   useEffect(() => {
//     document.body.classList.remove("light-mode", "dark-mode");
//     document.body.classList.add(theme === "Dark" ? "dark-mode" : "light-mode");
//   }, [theme]);

//   const embedCode = useMemo(() => {
//     // if (!embedMode) return;
//     if (!embedMode || embedMode === "null") return "";
//     if (embedMode === "instance") {
//       return generateInstanceEmbed(code);
//     } else if (embedMode === "global") {
//       return generateGlobalEmbed(code);
//     } else if (embedMode === "wordpress") {
//       return generateWordPressEmbedCode(code);
//     } else {
//       return generateIframeEmbed(code);
//     }
//   }, [embedMode, code]);

//   console.log(generateInstanceEmbed(code));

//   console.log(embedCode);

//   const handleCopy = () => {
//     navigator.clipboard.writeText(embedCode);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <ThemeProvider theme={muiTheme}>
//       <div className="app-theme">
//         <div className="app-container">
//           <Editor
//             code={code}
//             setCode={setCode}
//             theme={theme}
//             setTheme={setTheme}
//           />
//           <Preview code={shouldRun ? code : ""} />
//         </div>
//         <div className="embed-section">
//           <div className="embed-option-wrapper">
//             <EmbedOptionsPanel
//               shouldRun={shouldRun}
//               setShouldRun={setShouldRun}
//               theme={theme}
//               setTheme={setTheme}
//               editable={editable}
//               setEditable={setEditable}
//             />
//           </div>
//           <div className="embed-code-wrapper">
//             <ModeButtonsGroup
//               embedMode={embedMode}
//               setEmbedMode={setEmbedMode}
//               copied={copied}
//               setCopied={setCopied}
//               embedCode={embedCode}
//               handleCopy={handleCopy}
//             />
//             <EmbedCodeBox
//               embedMode={embedMode}
//               code={code}
//               setEmbedMode={setEmbedMode}
//               embedCode={embedCode}
//               editable={editable}
//             />
//           </div>
//         </div>
//         <EmbedInstructionModal
//           isOpen={isModalOpen}
//           onClose={handleCloseModal}
//           platform={selectedPlatform}
//         />
//         <button onClick={() => handlePlatformClick("wordpress")}>
//           WordPress
//         </button>
//         <button onClick={() => handlePlatformClick("blogger")}>Blogger</button>
//         <button onClick={() => handlePlatformClick("medium")}>Medium</button>
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;

// import { useState, useMemo, useEffect } from "react";
// import Editor from "./Components/EditorPreviewPanel/Editor";
// import Preview from "./Components/EditorPreviewPanel/Preview";
// import EmbedOptionsPanel from "./Components/EmbedOptionsPanel/EmbedOptionsPanel";
// import EmbedCodeBox from "./Components/EmbedCodeButtonsPanel/EmbedCodeBox";
// import ModeButtonsGroup from "./Components/EmbedCodeButtonsPanel/ModeButtonsGroup";
// import EmbedInstructionModal from "./Components/EmbedCodeButtonsPanel/EmbedInstructionModal";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

// import {
//   generateInstanceEmbed,
//   generateGlobalEmbed,
//   generateIframeEmbed,
//   generateWordPressEmbedCode,
// } from "./utils/EmbedUtils";

// import "./App.css";

// function App() {
//   const [embedMode, setEmbedMode] = useState("null");
//   const [shouldRun, setShouldRun] = useState(false);
//   const [theme, setTheme] = useState("dark");
//   const [editable, setEditable] = useState(false);

//   const [selectedPlatform, setSelectedPlatform] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(true);
//   const [code, setCode] = useState(() => {
//     const saved = localStorage.getItem("lastSketch");
//     if (!saved || saved === "null") {
//       return `function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(220);
// }`;
//     }
//     return saved;
//   });

//   useEffect(() => {
//     localStorage.setItem("lastSketch", code);
//   }, [code]);

//   const [copied, setCopied] = useState(false);

//   const muiTheme = createTheme({
//     palette: {
//       mode: theme === "Dark" ? "dark" : "light",
//     },
//   });

//   useEffect(() => {
//     document.body.classList.remove("light-mode", "dark-mode");
//     document.body.classList.add(theme === "Dark" ? "dark-mode" : "light-mode");
//   }, [theme]);

//   const embedCode = useMemo(() => {
//     if (!embedMode || embedMode === "null") return "";
//     if (embedMode === "instance") return generateInstanceEmbed(code);
//     if (embedMode === "global") return generateGlobalEmbed(code);
//     if (embedMode === "wordpress") return generateWordPressEmbedCode(code);
//     return generateIframeEmbed(code);
//   }, [embedMode, code]);

//   const handleCopy = () => {
//     navigator.clipboard.writeText(embedCode);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const handlePlatformSelect = (platform) => {
//     setSelectedPlatform(platform);
//     setIsModalOpen(false);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <ThemeProvider theme={muiTheme}>
//       <div className={`app-theme ${isModalOpen ? "app-blurred" : ""}`}>
//         <div className="app-container">
//           <Editor
//             code={code}
//             setCode={setCode}
//             theme={theme}
//             setTheme={setTheme}
//           />
//           <Preview code={shouldRun ? code : ""} />
//         </div>

//         <div className="embed-section">
//           <div className="embed-option-wrapper">
//             <EmbedOptionsPanel
//               shouldRun={shouldRun}
//               setShouldRun={setShouldRun}
//               theme={theme}
//               setTheme={setTheme}
//               editable={editable}
//               setEditable={setEditable}
//             />
//           </div>

//           <div className="embed-code-wrapper">
//             <ModeButtonsGroup
//               embedMode={embedMode}
//               setEmbedMode={setEmbedMode}
//               copied={copied}
//               setCopied={setCopied}
//               embedCode={embedCode}
//               handleCopy={handleCopy}
//             />

//             <EmbedCodeBox
//               embedMode={embedMode}
//               code={code}
//               setEmbedMode={setEmbedMode}
//               embedCode={embedCode}
//               editable={editable}
//               selectedPlatform={selectedPlatform}
//             />
//           </div>
//         </div>
//       </div>

//       <EmbedInstructionModal
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         onPlatformSelect={handlePlatformSelect}
//       />
//     </ThemeProvider>
//   );
// }

// export default App;

// import { useState, useMemo, useEffect } from "react";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

// import Editor from "./Components/EditorPreviewPanel/Editor";
// import Preview from "./Components/EditorPreviewPanel/Preview";

// import EmbedPlatformSelector from "./Components/EmbedOptionsPanel/EmbedPlatfromSelector";
// import EmbedCodeBox from "./Components/EmbedCodeButtonsPanel/EmbedCodeBox";
// import DarkModeEditableControls from "./Components/EmbedOptionsPanel/DarkModeEditableControls";
// import WelcomeModal from "./Components/Modals/WelcomeModal";

// import {
//   generateInstanceEmbed,
//   generateGlobalEmbed,
//   generateIframeEmbed,
//   generateWordPressEmbedCode,
// } from "./utils/EmbedUtils";

// import "./App.css";

// function App() {
//   const [embedMode, setEmbedMode] = useState("null");
//   const [theme, setTheme] = useState("dark");
//   const [editable, setEditable] = useState(false);
//   const [shouldRun, setShouldRun] = useState(false);
//   const [selectedPlatform, setSelectedPlatform] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(true);

//   const [code, setCode] = useState(() => {
//     const saved = localStorage.getItem("lastSketch");
//     return saved && saved !== "null"
//       ? saved
//       : `function setup() { createCanvas(400, 400); } function draw() { background(220); }`;
//   });

//   useEffect(() => {
//     localStorage.setItem("lastSketch", code);
//   }, [code]);

//   const [copied, setCopied] = useState(false);

//   const muiTheme = createTheme({
//     palette: { mode: theme === "Dark" ? "dark" : "light" },
//   });

//   useEffect(() => {
//     document.body.classList.remove("light-mode", "dark-mode");
//     document.body.classList.add(theme === "Dark" ? "dark-mode" : "light-mode");
//   }, [theme]);

//   const embedCode = useMemo(() => {
//     if (!embedMode || embedMode === "null") return "";
//     if (embedMode === "instance") return generateInstanceEmbed(code);
//     if (embedMode === "global") return generateGlobalEmbed(code);
//     if (embedMode === "wordpress") return generateWordPressEmbedCode(code);
//     return generateIframeEmbed(code);
//   }, [embedMode, code]);

//   const handleCopy = () => {
//     navigator.clipboard.writeText(embedCode);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <ThemeProvider theme={muiTheme}>
//       <div className={`app-theme ${isModalOpen ? "app-blurred" : ""}`}>

//         <WelcomeModal
//           isOpen={isModalOpen}
//           onClose={() => setIsModalOpen(false)}
//         />

//         <div className="app-container">
//           <div className="editor-section">
//             <Editor
//               code={code}
//               setCode={setCode}
//               theme={theme}
//               shouldRun={shouldRun}
//               setShouldRun={setShouldRun}
//             />
//           </div>
//           <Preview code={code} shouldRun={shouldRun} />

//           <div className="embed-section">
//             <EmbedPlatformSelector
//               embedMode={embedMode}
//               setEmbedMode={setEmbedMode}
//               selectedPlatform={selectedPlatform}
//               setSelectedPlatform={setSelectedPlatform}
//             />

//             <EmbedCodeBox
//               code={code}
//               embedMode={embedMode}
//               embedCode={embedCode}
//               copied={copied}
//               handleCopy={handleCopy}
//             />

//             <DarkModeEditableControls
//               theme={theme}
//               setTheme={setTheme}
//               editable={editable}
//               setEditable={setEditable}
//             />
//           </div>
//         </div>
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;

import { useState, useMemo, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Editor from "./Components/EditorPreviewPanel/Editor";
import Preview from "./Components/EditorPreviewPanel/Preview";

import EmbedPlatformSelector from "./Components/EmbedOptionsPanel/EmbedPlatfromSelector";
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

  return (
    <div>
      <h4>
        Step 1: Copy and paste your code into the editor below and preview your
        sketch
      </h4>
      <ThemeProvider theme={muiTheme}>
        <div className={`app-theme ${isModalOpen ? "app-blurred" : ""}`}>
          <WelcomeModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />

          <div className="app-container">
            {/* Top Row: Editor + Preview */}
            <div className="editor-preview-row">
              <div className="editor-column">
                <Editor
                  code={code}
                  setCode={setCode}
                  theme={theme}
                  shouldRun={shouldRun}
                  setShouldRun={setShouldRun}
                />
                {/* Platform selector under Editor */}
                <EmbedPlatformSelector
                  embedMode={embedMode}
                  setEmbedMode={setEmbedMode}
                  selectedPlatform={selectedPlatform}
                  setSelectedPlatform={setSelectedPlatform}
                />
              </div>

              <div className="preview-column">
                <Preview code={code} shouldRun={shouldRun} />
                {/* Embed code box under Preview */}
                <EmbedCodeBox
                  code={code}
                  embedMode={embedMode}
                  embedCode={embedCode}
                  copied={copied}
                  handleCopy={handleCopy}
                  selectedPlatform={selectedPlatform}
                />
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;

{
  /* <h4>
  Step 1: Copy and paste your code into the editor below and preview your
  sketch
</h4>; */
}
