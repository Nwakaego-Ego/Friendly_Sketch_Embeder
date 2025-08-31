export const convertToInstanceMode = (code) => {
  return (
    code
      // Convert `function setup()` and `function draw()` to `p.setup = function()`
      .replace(
        /\bfunction\s+(setup|draw|preload|mousePressed|keyPressed|windowResized)\s*\(/g,
        "p.$1 = function("
      )

      // // Convert common p5 functions
      // .replace(/\bcreateCanvas\b/g, "p.createCanvas")
      // .replace(/\bbackground\b/g, "p.background")
      // .replace(/\bellipse\b/g, "p.ellipse")
      // .replace(/\bfill\b/g, "p.fill")
      // .replace(/\bstroke\b/g, "p.stroke")
      // .replace(/\bnoStroke\b/g, "p.noStroke")
      // .replace(/\bnoFill\b/g, "p.noFill")
      // .replace(/\bcolor\b/g, "p.color")

      // // Convert width/height
      // .replace(/\bwidth\b/g, "p.width")
      // .replace(/\bheight\b/g, "p.height")

      // // Convert red/green/blue
      // .replace(/\bred\b/g, "p.red")
      // .replace(/\bgreen\b/g, "p.green")
      // .replace(/\bblue\b/g, "p.blue")

      // // Convert loadImage, loadSound, etc.
      // .replace(/\bloadImage\b/g, "p.loadImage")
      // .replace(/\bloadSound\b/g, "p.loadSound")
      // .replace(/\bcreateGraphics\b/g, "p.createGraphics")

      // // Convert mouse and keyboard globals
      // .replace(/\bmouseX\b/g, "p.mouseX")
      // .replace(/\bmouseY\b/g, "p.mouseY")
      // .replace(/\bkeyCode\b/g, "p.keyCode")
      // .replace(/\bkey\b/g, "p.key")
      // .replace(/\bkeyIsDown\b/g, "p.keyIsDown")

      // Clean up extra blank lines or spacing

      // 🎨 Drawing & Color
      .replace(/\bpoint\b/g, "p.point")
      .replace(/\bline\b/g, "p.line")
      .replace(/\brect\b/g, "p.rect")
      .replace(/\bellipse\b/g, "p.ellipse")
      .replace(/\bcircle\b/g, "p.circle")
      .replace(/\barc\b/g, "p.arc")
      .replace(/\btriangle\b/g, "p.triangle")
      .replace(/\bquad\b/g, "p.quad")
      .replace(/\bbeginShape\b/g, "p.beginShape")
      .replace(/\bendShape\b/g, "p.endShape")
      .replace(/\bvertex\b/g, "p.vertex")
      .replace(/\bbezierVertex\b/g, "p.bezierVertex")
      .replace(/\bcurveVertex\b/g, "p.curveVertex")
      .replace(/\bbezier\b/g, "p.bezier")
      .replace(/\bcurve\b/g, "p.curve")

      .replace(/\bfill\b/g, "p.fill")
      .replace(/\bnoFill\b/g, "p.noFill")
      .replace(/\bstroke\b/g, "p.stroke")
      .replace(/\bnoStroke\b/g, "p.noStroke")
      .replace(/\bstrokeWeight\b/g, "p.strokeWeight")
      .replace(/\bstrokeCap\b/g, "p.strokeCap")
      .replace(/\bstrokeJoin\b/g, "p.strokeJoin")
      .replace(/\bcolor\b/g, "p.color")
      .replace(/\bcolorMode\b/g, "p.colorMode")
      .replace(/\blerpColor\b/g, "p.lerpColor")
      .replace(/\balpha\b/g, "p.alpha")
      .replace(/\bred\b/g, "p.red")
      .replace(/\bgreen\b/g, "p.green")
      .replace(/\bblue\b/g, "p.blue")
      .replace(/\bhue\b/g, "p.hue")
      .replace(/\bsaturation\b/g, "p.saturation")
      .replace(/\bbrightness\b/g, "p.brightness")

      .replace(/\bbackground\b/g, "p.background")
      .replace(/\bclear\b/g, "p.clear")
      .replace(/\bnoLoop\b/g, "p.noLoop")
      .replace(/\bloop\b/g, "p.loop")

      // 🖼 Images & Media
      .replace(/\bimage\b/g, "p.image")
      .replace(/\bimageMode\b/g, "p.imageMode")
      .replace(/\btint\b/g, "p.tint")
      .replace(/\bnoTint\b/g, "p.noTint")
      .replace(/\bcreateImage\b/g, "p.createImage")
      .replace(/\bloadImage\b/g, "p.loadImage")
      .replace(/\bloadPixels\b/g, "p.loadPixels")
      .replace(/\bupdatePixels\b/g, "p.updatePixels")
      .replace(/\bget\b/g, "p.get")
      .replace(/\bset\b/g, "p.set")
      .replace(/\bfilter\b/g, "p.filter")
      .replace(/\bcopy\b/g, "p.copy")

      .replace(/\bcreateCapture\b/g, "p.createCapture")
      .replace(/\bcreateVideo\b/g, "p.createVideo")
      .replace(/\bcreateAudio\b/g, "p.createAudio")
      .replace(/\bloadSound\b/g, "p.loadSound")
      .replace(/\bsoundFormats\b/g, "p.soundFormats")

      // ✍️ Typography
      .replace(/\btext\b/g, "p.text")
      .replace(/\btextSize\b/g, "p.textSize")
      .replace(/\btextAlign\b/g, "p.textAlign")
      .replace(/\btextFont\b/g, "p.textFont")
      .replace(/\btextStyle\b/g, "p.textStyle")
      .replace(/\btextWidth\b/g, "p.textWidth")
      .replace(/\btextAscent\b/g, "p.textAscent")
      .replace(/\btextDescent\b/g, "p.textDescent")
      .replace(/\btextLeading\b/g, "p.textLeading")

      // 🔄 Transformations
      .replace(/\btranslate\b/g, "p.translate")
      .replace(/\brotate\b/g, "p.rotate")
      .replace(/\brotateX\b/g, "p.rotateX")
      .replace(/\brotateY\b/g, "p.rotateY")
      .replace(/\brotateZ\b/g, "p.rotateZ")
      .replace(/\bscale\b/g, "p.scale")
      .replace(/\bshearX\b/g, "p.shearX")
      .replace(/\bshearY\b/g, "p.shearY")
      .replace(/\bpush\b/g, "p.push")
      .replace(/\bpop\b/g, "p.pop")
      .replace(/\bresetMatrix\b/g, "p.resetMatrix")
      .replace(/\bapplyMatrix\b/g, "p.applyMatrix")

      // 📐 Math & Random
      .replace(/\brandom\b/g, "p.random")
      .replace(/\brandomSeed\b/g, "p.randomSeed")
      .replace(/\bnoise\b/g, "p.noise")
      .replace(/\bnoiseSeed\b/g, "p.noiseSeed")
      .replace(/\bnoiseDetail\b/g, "p.noiseDetail")

      .replace(/\bmap\b/g, "p.map")
      .replace(/\bnorm\b/g, "p.norm")
      .replace(/\blerp\b/g, "p.lerp")
      .replace(/\bconstrain\b/g, "p.constrain")
      .replace(/\bdist\b/g, "p.dist")
      .replace(/\bmag\b/g, "p.mag")
      .replace(/\bsq\b/g, "p.sq")
      .replace(/\bsqrt\b/g, "p.sqrt")
      .replace(/\bpow\b/g, "p.pow")

      .replace(/\bsin\b/g, "p.sin")
      .replace(/\bcos\b/g, "p.cos")
      .replace(/\btan\b/g, "p.tan")
      .replace(/\basin\b/g, "p.asin")
      .replace(/\bacos\b/g, "p.acos")
      .replace(/\batan\b/g, "p.atan")
      .replace(/\batan2\b/g, "p.atan2")
      .replace(/\bradians\b/g, "p.radians")
      .replace(/\bdegrees\b/g, "p.degrees")

      // 🖱 Mouse & Touch
      .replace(/\bmouseX\b/g, "p.mouseX")
      .replace(/\bmouseY\b/g, "p.mouseY")
      .replace(/\bpmouseX\b/g, "p.pmouseX")
      .replace(/\bpmouseY\b/g, "p.pmouseY")
      .replace(/\bmouseIsPressed\b/g, "p.mouseIsPressed")
      .replace(/\bmouseButton\b/g, "p.mouseButton")

      .replace(/\bmousePressed\b/g, "p.mousePressed")
      .replace(/\bmouseReleased\b/g, "p.mouseReleased")
      .replace(/\bmouseClicked\b/g, "p.mouseClicked")
      .replace(/\bmouseDragged\b/g, "p.mouseDragged")
      .replace(/\bmouseMoved\b/g, "p.mouseMoved")
      .replace(/\bmouseWheel\b/g, "p.mouseWheel")

      .replace(/\btouches\b/g, "p.touches")
      .replace(/\btouchStarted\b/g, "p.touchStarted")
      .replace(/\btouchMoved\b/g, "p.touchMoved")
      .replace(/\btouchEnded\b/g, "p.touchEnded")

      // ⌨ Keyboard
      .replace(/\bkey\b/g, "p.key")
      .replace(/\bkeyCode\b/g, "p.keyCode")
      .replace(/\bkeyIsPressed\b/g, "p.keyIsPressed")

      .replace(/\bkeyPressed\b/g, "p.keyPressed")
      .replace(/\bkeyReleased\b/g, "p.keyReleased")
      .replace(/\bkeyTyped\b/g, "p.keyTyped")

      // 📊 Environment & Utilities
      .replace(/\bwidth\b/g, "p.width")
      .replace(/\bheight\b/g, "p.height")
      .replace(/\bwindowWidth\b/g, "p.windowWidth")
      .replace(/\bwindowHeight\b/g, "p.windowHeight")
      .replace(/\bdisplayWidth\b/g, "p.displayWidth")
      .replace(/\bdisplayHeight\b/g, "p.displayHeight")

      .replace(/\bframeCount\b/g, "p.frameCount")
      .replace(/\bframeRate\b/g, "p.frameRate")
      .replace(/\bsetFrameRate\b/g, "p.frameRate")
      .replace(/\bdeltaTime\b/g, "p.deltaTime")

      .replace(/\bfullscreen\b/g, "p.fullscreen")
      .replace(/\bpixelDensity\b/g, "p.pixelDensity")
      .replace(/\bnoCanvas\b/g, "p.noCanvas")
      .replace(/\bcreateGraphics\b/g, "p.createGraphics")

      .replace(/\bsaveCanvas\b/g, "p.saveCanvas")
      .replace(/\bsaveFrames\b/g, "p.saveFrames")
      .replace(/\bsaveJSON\b/g, "p.saveJSON")
      .replace(/\bsaveStrings\b/g, "p.saveStrings")
      .replace(/\bsaveTable\b/g, "p.saveTable")

      // ⏱ Time & Date
      .replace(/\bday\b/g, "p.day")
      .replace(/\bmonth\b/g, "p.month")
      .replace(/\byear\b/g, "p.year")
      .replace(/\bhour\b/g, "p.hour")
      .replace(/\bminute\b/g, "p.minute")
      .replace(/\bsecond\b/g, "p.second")
      .replace(/\bmillis\b/g, "p.millis")

      // 🧮 Data & Vectors
      .replace(/\bcreateVector\b/g, "p.createVector")
      .replace(/\bp5\.Vector\b/g, "p5.Vector") // vectors are classes, not prefixed
      .replace(/\bloadJSON\b/g, "p.loadJSON")
      .replace(/\bloadStrings\b/g, "p.loadStrings")
      .replace(/\bloadTable\b/g, "p.loadTable")
      .replace(/\bloadXML\b/g, "p.loadXML")

      // 🎛 Misc
      .replace(/\bprint\b/g, "p.print")
      .replace(/\bprintln\b/g, "p.println")

      .trim()
  );
};
