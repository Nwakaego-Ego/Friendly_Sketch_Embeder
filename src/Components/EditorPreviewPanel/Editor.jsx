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

import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import "./Editor.css";
export default function Editor({ code, setCode }) {
  return (
    <div className="editor-wrapper">
      {" "}
      {/* You can style this div if needed */}
      <CodeMirror
        value={code}
        height="290px"
        width="635px"
        theme="light"
        extensions={[javascript()]}
        onChange={(value) => setCode(value)}
      />
    </div>
  );
}
