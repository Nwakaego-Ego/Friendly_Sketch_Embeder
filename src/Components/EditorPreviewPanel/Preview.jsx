// import React, { useEffect } from "react";
// import { generateInstanceEmbed } from "../../utils/EmbedUtils";
// import "./Preview.css";

// const Preview = ({ code, shouldRun }) => {
//   const instanceWrapper = generateInstanceEmbed(code);

//   return (
//     <div>
//       {" "}
//       <iframe
//         srcDoc={`
//     <!DOCTYPE html>
//     <html>
//       <head>
//         <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script>
//       </head>
//       <body>
//         <script>${code}</script>
//       </body>
//     </html>
//   `}
//         className="preview-box"
//       />
//     </div>
//   );
// };

// export default Preview;

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

// import React from "react";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import "./Preview.css";

// const Preview = ({ code }) => {
//   return (
//     <Box sx={{ px: 2, py: 0 }}>
//       <Paper
//         elevation={3}
//         sx={{
//           overflow: "hidden",
//           borderRadius: 1,
//           border: "1px solid #ccc",
//         }}
//       >
//         <iframe
//           title="Sketch Preview"
//           srcDoc={`<!DOCTYPE html>
//             <html>
//               <head>
//                 <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script>
//               </head>
//               <body>
//                 <script>${code}</script>
//               </body>
//             </html>`}
//           style={{
//             width: "635px",
//             height: "283px",
//             border: "none",
//           }}
//           className="preview"
//         />
//       </Paper>
//     </Box>
//   );
// };

// export default Preview;

import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./Preview.css";

const Preview = ({ code, shouldRun }) => {
  return (
    <Box sx={{ px: 2, py: 0 }}>
      <Paper
        elevation={3}
        sx={{
          overflow: "hidden",
          borderRadius: 1,
          border: "1px solid #ccc",
        }}
      >
        {shouldRun ? (
          <iframe
            title="Sketch Preview"
            srcDoc={`<!DOCTYPE html>
              <html>
                <head>
                  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script>
                </head>
                <body>
                  <script>${code}</script>
                </body>
              </html>`}
            style={{
              width: "635px",
              height: "283px",
              border: "none",
            }}
            className="preview"
          />
        ) : (
          <div
            style={{
              width: "635px",
              height: "283px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f6f6f6",
              color: "#999",
              fontStyle: "italic",
              border: "1px solid #d9d9d9",
            }}
          >
            Preview Paused
          </div>
        )}
      </Paper>
    </Box>
  );
};

export default Preview;
