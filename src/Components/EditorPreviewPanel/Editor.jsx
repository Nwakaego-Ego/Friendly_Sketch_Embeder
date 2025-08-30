// import React from "react";
// import "./Editor.css";

// const Editor = ({ code, setCode }) => {
//   return (
//     <div>
//       <textarea
//         className="input-code"
//         value={code}
//         onChange={(e) => setCode(e.target.value)}
//       />
//     </div>
//   );
// };

// export default Editor;

// src/Components/EditorPreviewPanel/Editor.jsx

// import React from "react";
// import CodeMirror from "@uiw/react-codemirror";
// import { javascript } from "@codemirror/lang-javascript";
// import "./Editor.css";
// export default function Editor({ code, setCode, theme }) {
//   const codeMirrorTheme = theme === "Dark" ? "dark" : "light";

//   return (
//     <div className="editor-wrapper editor">
//       {" "}
//       <CodeMirror
//         value={code}
//         height="290px"
//         width="635px"
//         theme={codeMirrorTheme}
//         extensions={[javascript()]}
//         onChange={(value) => setCode(value)}
//       />
//     </div>
//   );
// }

import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import "./Editor.css";

export default function Editor({
  code,
  setCode,
  theme,
  shouldRun,
  setShouldRun,
}) {
  const codeMirrorTheme = theme === "Dark" ? "dark" : "light";

  return (
    <div className="editor-wrapper">
      {/* Play / Pause buttons above the editor */}
      <div className="play-pause-buttons">
        <button
          onClick={() => setShouldRun(true)}
          disabled={shouldRun}
          className="play-btn"
        >
          Play
        </button>
        <button
          onClick={() => setShouldRun(false)}
          disabled={!shouldRun}
          className="pause-btn"
        >
          Pause
        </button>
      </div>

      {/* CodeMirror editor */}
      <CodeMirror
        value={code}
        height="35vh"
        width="100%"
        theme={codeMirrorTheme}
        extensions={[javascript()]}
        onChange={(value) => setCode(value)}
      />
    </div>
  );
}
