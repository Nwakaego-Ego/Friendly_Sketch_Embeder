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

export function generateGlobalEmbed(userCode) {
  return `<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script>
  <script>
  ${userCode}
  </script>`;
}

export function generateIframeEmbed(userCode) {
  return `<iframe srcdoc='<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script><script>${userCode}</script>' width='400' height='400'></iframe>`;
}
