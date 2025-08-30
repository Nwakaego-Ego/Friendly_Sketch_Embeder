// import React from "react";
// // import PregeneratedCodeDisplay from "../EmbedOptionsPanel/PregeneratedCodeDisplay";
// import PlatformInstructionDisplay from "./PlatformInstructionDisplay";
// import {
//   Button,
//   Typography,
//   Box,
//   Grid,
//   FormControlLabel,
//   Switch,
//   Paper,
// } from "@mui/material";

// const embedModes = ["Multiple Sketch", "Single Sketch", "iframe"];

// const platforms = [
//   { name: "Blogger", value: "blogger" },
//   { name: "WordPress", value: "wordpress" },
//   { name: "Website", value: "website" },
//   { name: "Medium", value: "medium" },
//   { name: "Notion", value: "notion" },
//   { name: "Squarespace", value: "squarespace" },
//   { name: "Webflow", value: "webflow" },
//   { name: "Wix", value: "wix" },
//   { name: "GoDaddy", value: "godaddy" },
// ];

// export default function EmbedPlatformSelector({
//   embedMode,
//   setEmbedMode,
//   selectedPlatform,
//   setSelectedPlatform,
//   darkMode,
//   setDarkMode,
//   editable,
//   setEditable,
// }) {
//   return (
//     <div>
//       <h4>Step 2: Choose your embed options</h4>
//       <Paper elevation={4} sx={{ p: 3, borderRadius: 3 }}>
//         {/* Section Title */}
//         <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
//           Choose Embed Mode & Platform
//         </Typography>

//         {/* Embed Mode Buttons */}
//         <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
//           {embedModes.map((mode) => (
//             <Button
//               key={mode}
//               variant={embedMode === mode ? "contained" : "outlined"}
//               color="primary"
//               onClick={() => setEmbedMode(mode)}
//               sx={{ flex: 1, textTransform: "capitalize", borderRadius: 2 }}
//             >
//               {mode}
//             </Button>
//           ))}
//         </Box>

//         {/* Platforms Grid */}
//         <Grid container spacing={2} sx={{ mb: 3 }}>
//           {platforms.map((platform) => (
//             <Grid item xs={4} key={platform.value}>
//               <Button
//                 fullWidth
//                 variant={
//                   selectedPlatform === platform.value ? "contained" : "outlined"
//                 }
//                 color="secondary"
//                 onClick={() => setSelectedPlatform(platform.value)}
//                 sx={{
//                   borderRadius: 2,
//                   textTransform: "capitalize",
//                   fontWeight: 500,
//                 }}
//               >
//                 {platform.name}
//               </Button>
//             </Grid>
//           ))}
//         </Grid>

//         {/* Dark Mode & Editable Toggles */}
//         {/* <Box sx={{ display: "flex", gap: 4 }}>
//         <FormControlLabel
//           control={
//             <Switch
//               checked={darkMode}
//               onChange={(e) => setDarkMode(e.target.checked)}
//               color="primary"
//             />
//           }
//           label="Dark Mode"
//         />
//         <FormControlLabel
//           control={
//             <Switch
//               checked={editable}
//               onChange={(e) => setEditable(e.target.checked)}
//               color="secondary"
//             />
//           }
//           label="Editable"
//         />
//       </Box> */}
//       </Paper>
//       <PlatformInstructionDisplay />
//     </div>
//   );
// }

import React from "react";
import PlatformInstructionDisplay from "./PlatformInstructionDisplay";

import { Button, Grid, Typography, Paper, Box } from "@mui/material";

const platforms = [
  { name: "Blogger", value: "blogger" },
  { name: "WordPress", value: "wordpress" },
  { name: "Website", value: "p. website" },
  { name: "Medium", value: "medium" },
  { name: "Notion", value: "notion" },
  { name: "Squarespace", value: "squarespace" },
  { name: "Webflow", value: "webflow" },
  { name: "Wix", value: "wix" },
  { name: "GoDaddy", value: "godaddy" },
];

// export default function EmbedPlatformSelector({
//   selectedPlatform,
//   setSelectedPlatform,
// }) {
//   return (
//     <div>
//       <h4>Step 2: Choose your platform</h4>
//       <Paper elevation={4} sx={{ p: 3, borderRadius: 3 }}>
//         <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
//           Select a Platform
//         </Typography>

//         <Grid container spacing={2} sx={{ mb: 3 }}>
//           {platforms.map((platform) => (
//             <Grid item xs={4} key={platform.value}>
//               <Button
//                 fullWidth
//                 variant={
//                   selectedPlatform === platform.value ? "contained" : "outlined"
//                 }
//                 color="secondary"
//                 onClick={() => setSelectedPlatform(platform.value)}
//                 sx={{
//                   borderRadius: 2,
//                   textTransform: "capitalize",
//                   fontWeight: 500,
//                 }}
//               >
//                 {platform.name}
//               </Button>
//             </Grid>
//           ))}
//         </Grid>

//         <PlatformInstructionDisplay selectedPlatform={selectedPlatform} />
//       </Paper>
//     </div>
//   );
// }

export default function EmbedPlatformSelector({
  selectedPlatform,
  setSelectedPlatform,
}) {
  return (
    <div>
      <h4>Step 2: Choose your platform</h4>
      <Paper elevation={4} sx={{ p: 3, borderRadius: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          Select a Platform
        </Typography>

        <Grid
          container
          spacing={1}
          className="platform-buttons-grid"
          sx={{ mb: 2 }}
        >
          {platforms.map((platform) => (
            <Grid item xs={4} key={platform.value}>
              <Button
                fullWidth
                variant={
                  selectedPlatform === platform.value ? "contained" : "outlined"
                }
                color="secondary"
                onClick={() => setSelectedPlatform(platform.value)}
                sx={{
                  borderRadius: 2,
                  fontWeight: 500,
                  textTransform: "capitalize",
                }}
              >
                {platform.name}
              </Button>
            </Grid>
          ))}
        </Grid>

        <PlatformInstructionDisplay selectedPlatform={selectedPlatform} />
      </Paper>
    </div>
  );
}
