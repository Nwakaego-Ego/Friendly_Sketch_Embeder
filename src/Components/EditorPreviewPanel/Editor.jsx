import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { Play, Pause } from "lucide-react";
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
      <div className="play-pause-buttons">
        <button
          onClick={() => setShouldRun(true)}
          disabled={shouldRun}
          className="play-btn"
        >
          <Play size={18} />
        </button>
        <button
          onClick={() => setShouldRun(false)}
          disabled={!shouldRun}
          className="pause-btn"
        >
          <Pause size={18} />
        </button>
      </div>

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
