import React, { useEffect } from "react";
import { generateInstanceEmbed } from "../../utils/EmbedUtils";
import "./Preview.css";

const Preview = ({ code, shouldRun }) => {
  const instanceWrapper = generateInstanceEmbed(code);

  return (
    <div>
      {" "}
      <iframe
        srcDoc={`
    <!DOCTYPE html>
    <html>
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script>
      </head>
      <body>
        <script>${code}</script>
      </body>
    </html>
  `}
        className="preview-box"
      />
    </div>
  );
};

export default Preview;

// import React from "react";
// import Box from "@mui/material/Box";

// const Preview = ({ code, shouldRun }) => {
//   return (
//     <Box
//       sx={{
//         mt: 2,
//         borderRadius: 2,
//         overflow: "hidden",
//         boxShadow: 3,
//         border: "1px solid #e0e0e0",
//         width: "100%",
//         maxWidth: 600,
//         height: 420,
//       }}
//     >
//       <iframe
//         title="p5-preview"
//         srcDoc={`
//           <!DOCTYPE html>
//           <html>
//             <head>
//               <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script>
//             </head>
//             <body>
//               <script>${code}</script>
//             </body>
//           </html>
//         `}
//         width="100%"
//         height="100%"
//         style={{
//           border: "none",
//           display: "block",
//         }}
//       />
//     </Box>
//   );
// };

// export default Preview;
