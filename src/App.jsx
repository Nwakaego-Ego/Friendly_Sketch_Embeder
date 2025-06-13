import { useState } from "react";
import Editor from "./Components/Editor/Editor";
import Preview from "./Components/Preview/Preview";
import "./App.css";

function App() {
  const [code, setCode] = useState("");

  return (
    <>
      <div className="app-container">
        <Editor code={code} setCode={setCode} />
        <Preview code={code} />
      </div>
    </>
  );
}

export default App;
