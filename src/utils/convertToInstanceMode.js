export const convertToInstanceMode = (code) => {
  return (
    code
      // Convert `function setup()` and `function draw()` to `p.setup = function()`
      .replace(
        /\bfunction\s+(setup|draw|preload|mousePressed|keyPressed|windowResized)\s*\(/g,
        "p.$1 = function("
      )

      // Convert common p5 functions
      .replace(/\bcreateCanvas\b/g, "p.createCanvas")
      .replace(/\bbackground\b/g, "p.background")
      .replace(/\bellipse\b/g, "p.ellipse")
      .replace(/\bfill\b/g, "p.fill")
      .replace(/\bstroke\b/g, "p.stroke")
      .replace(/\bnoStroke\b/g, "p.noStroke")
      .replace(/\bnoFill\b/g, "p.noFill")
      .replace(/\bcolor\b/g, "p.color")

      // Convert width/height
      .replace(/\bwidth\b/g, "p.width")
      .replace(/\bheight\b/g, "p.height")

      // Convert red/green/blue
      .replace(/\bred\b/g, "p.red")
      .replace(/\bgreen\b/g, "p.green")
      .replace(/\bblue\b/g, "p.blue")

      // Convert loadImage, loadSound, etc.
      .replace(/\bloadImage\b/g, "p.loadImage")
      .replace(/\bloadSound\b/g, "p.loadSound")
      .replace(/\bcreateGraphics\b/g, "p.createGraphics")

      // Convert mouse and keyboard globals
      .replace(/\bmouseX\b/g, "p.mouseX")
      .replace(/\bmouseY\b/g, "p.mouseY")
      .replace(/\bkeyCode\b/g, "p.keyCode")
      .replace(/\bkey\b/g, "p.key")
      .replace(/\bkeyIsDown\b/g, "p.keyIsDown")

      // Clean up extra blank lines or spacing
      .trim()
  );
};
