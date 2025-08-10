import { convertToInstanceMode } from "./convertToInstanceMode";

// export function generateInstanceEmbed(userCode) {
//   const convertedCode = convertToInstanceMode(userCode);

//   const html = `
//     <!DOCTYPE html>
//     <html>
//       <head>
//         <meta charset="UTF-8" />
//         <script src="https://cdn.jsdelivr.net/npm/p5@1.6.0/lib/p5.min.js"></script>
//       </head>
//       <body>
//         <div id="sketch"></div>
//         <script>
//           const sketch = function(p) {
//             ${convertedCode}
//           };
//           new p5(sketch, "sketch");
//         </script>
//       </body>
//     </html>
//   `;

//   const escaped = html
//     .replace(/"/g, "&quot;")
//     .replace(/\n/g, " ")
//     .replace(/<\/script>/g, "<\\/script>");
//   return `<iframe srcdoc="${escaped}" frameborder="0" style="border:none;width:100%;aspect-ratio:4/3;max-width:800px;height:auto;display:block;margin:auto;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,0.15);"
//   loading="lazy"
//   allowfullscreen></iframe>`;
// }

export function generateInstanceEmbed(userCode) {
  const convertedCode = convertToInstanceMode(userCode);

  const html = `
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

  return html;
}

// export function generateGlobalEmbed(userCode) {
//   return `<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script>
//   <script>
//   ${userCode}
//   </script>`;
// }

export function generateGlobalEmbed(userCode) {
  const html =
    `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>p5.js Global Mode Sketch</title>
  <style>
    html, body {
      margin: 0;
      padding: 0;
      overflow: hidden;
      background: #fff;
    }
    canvas {
      display: block;
    }
  </style>
  <script src="https://cdn.jsdelivr.net/npm/p5@1.9.2/lib/p5.min.js"></script>
</head>
<body>
  <script>
${userCode}
// Prevent accidental closing script injection
</scr` +
    `ipt>
</body>
</html>
  `.trim();

  return html;
}

// export function generateIframeEmbed(userCode) {
// return `<iframe srcdoc='<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script><script>${userCode}</script>' width='400' height='400'></iframe>`;

export function generateIframeEmbed(userCode) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script>
        <style>body { margin: 0; padding: 0; overflow: hidden; }</style>
      </head>
      <body>
        <script>
          ${userCode}
        <\/script>
      </body>
    </html>
  `;

  return html;

  // const escaped = html
  //   .replace(/"/g, "&quot;")
  //   .replace(/\n/g, " ")
  //   .replace(/\s+/g, " ")
  //   .trim();

  // return `<iframe srcdoc="${escaped}" width="100%" height="400" frameborder="0"></iframe>`;
}

export function generateWordPressEmbedCode(userCode) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.2/p5.min.js"></script>
      </head>
      <body>
        <script>
          ${userCode}
        </script>
      </body>
    </html>
  `.trim();

  return html;

  // const escaped = html.replace(/"/g, "&quot;").replace(/\n/g, " ");

  // return `<iframe srcdoc="${escaped}" width="100%" height="400" frameborder="0"></iframe>`;
}
