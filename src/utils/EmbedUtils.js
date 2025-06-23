import { convertToInstanceMode } from "./convertToInstanceMode";

export function generateInstanceEmbed(userCode) {
  const convertedCode = convertToInstanceMode(userCode);

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <script src="https://cdn.jsdelivr.net/npm/p5@1.6.0/lib/p5.min.js"></script>
      </head>
      <body>
        <div id="sketch"></div>
        <script>
          const sketch = function(p) {
            ${convertedCode}
          };
          new p5(sketch, "sketch");
        </script>
      </body>
    </html>
  `;
}

// export function generateInstanceEmbed(userCode) {
//   return `
//       <!DOCTYPE html>
//       <html>
//         <head>
//           <meta charset="UTF-8" />
//           <script src="https://cdn.jsdelivr.net/npm/p5@1.6.0/lib/p5.min.js"></script>
//         </head>
//         <body>
//           <script>
//             const sketch = ${userCode};
//             new p5(sketch);
//           </script>
//         </body>
//       </html>
//     `;
// }
