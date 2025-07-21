const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { v4: uuidv4 } = require("uuid");

// Initialize Firebase Admin (gives you access to Storage, etc.)
admin.initializeApp();
const bucket = admin.storage().bucket();

// Create your uploadSketch HTTP function
exports.uploadSketch = functions.https.onRequest(async (req, res) => {
  const { sketchCode } = req.body;

  if (!sketchCode) {
    return res.status(400).send("Missing sketch code");
  }

  // Wrap the user's code in full HTML
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.2/p5.min.js"></script>
      </head>
      <body>
        <script>${sketchCode}</script>
      </body>
    </html>
  `;

  const id = uuidv4(); // Generate a unique ID for the sketch file
  const filePath = `sketches/${id}.html`;
  const file = bucket.file(filePath);

  // Upload the file to Firebase Storage
  await file.save(html, {
    metadata: {
      contentType: "text/html",
      metadata: {
        firebaseStorageDownloadTokens: id, // Needed to make it publicly accessible
      },
    },
  });

  // Return a public URL to the file
  const url = `https://firebasestorage.googleapis.com/v0/b/${
    bucket.name
  }/o/${encodeURIComponent(filePath)}?alt=media&token=${id}`;

  res.send({ embedUrl: url });
});
