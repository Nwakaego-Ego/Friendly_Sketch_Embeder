import React, { useState } from "react";
import { generateInstanceEmbed } from "../../utils/EmbedUtils";
import "./EmbedCodeBox.css";

const EmbedCodeBox = ({ embedCode }) => {
  // const [copied, setCopied] = useState(false);

  // let embedCode = "";
  // if (embedMode === "instance") {
  //   embedCode = generateInstanceEmbed(code);
  // }

  // if (embedMode === "instance") {
  //   embedCode = generateInstanceEmbed(code);
  // } else if (embedMode === "global") {
  //   embedCode = generateGlobalEmbed(code);
  // } else {
  //   embedCode = generateIframeEmbed(code);
  // }

  // console.log(generateInstanceEmbed(code));

  // console.log(embedCode);

  // const handleCopy = () => {
  //   navigator.clipboard.writeText(embedCode);
  //   setCopied(true);
  //   setTimeout(() => setCopied(false), 2000);
  // };

  console.log(embedCode);

  return (
    <div className="">
      <textarea readOnly value={embedCode} rows="10" className="code-box" />
    </div>
  );
};

export default EmbedCodeBox;

// components/EmbedCodeBox.jsx
// import React, { useState } from "react";
// import { generateInstanceEmbed } from "../utils/generateInstanceEmbed";
// import { generateIframeEmbed } from "../utils/generateIframeEmbed";
// import { generateGlobalEmbed } from "../utils/generateGlobalEmbed";

// const EmbedCodeBox = ({ code }) => {
//   const [embedMode, setEmbedMode] = useState("iframe");
//   const [copied, setCopied] = useState(false);

//   let embedCode = "";

//   if (embedMode === "instance") {
//     embedCode = generateInstanceEmbed(code);
//   } else if (embedMode === "global") {
//     embedCode = generateGlobalEmbed(code);
//   } else {
//     embedCode = generateIframeEmbed(code);
//   }

//   const handleCopy = () => {
//     navigator.clipboard.writeText(embedCode);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <div className="mt-6 border p-4 rounded shadow">
//       <h2 className="text-lg font-semibold mb-2">Embed Code</h2>

//       <div className="mb-2">
//         <label className="mr-4">
//           <input
//             type="radio"
//             value="iframe"
//             checked={embedMode === "iframe"}
//             onChange={(e) => setEmbedMode(e.target.value)}
//           />
//           Iframe
//         </label>
//         <label className="mr-4">
//           <input
//             type="radio"
//             value="instance"
//             checked={embedMode === "instance"}
//             onChange={(e) => setEmbedMode(e.target.value)}
//           />
//           Instance Mode
//         </label>
//         <label>
//           <input
//             type="radio"
//             value="global"
//             checked={embedMode === "global"}
//             onChange={(e) => setEmbedMode(e.target.value)}
//           />
//           Global Mode
//         </label>
//       </div>

//       <textarea
//         readOnly
//         value={embedCode}
//         rows="12"
//         className="w-full p-2 border font-mono text-sm"
//       />

//       <button
//         onClick={handleCopy}
//         className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
//       >
//         {copied ? "Copied!" : "Copy Code"}
//       </button>
//     </div>
//   );
// };

// export default EmbedCodeBox;
