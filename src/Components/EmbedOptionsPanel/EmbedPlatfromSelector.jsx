// import React from "react";
// import { Button, ButtonGroup, Typography, Box } from "@mui/material";

// const platforms = [
//   { name: "Blog", value: "blog" },
//   { name: "WordPress", value: "wordpress" },
//   { name: "Website", value: "website" },
// ];

// const embedModes = ["instance", "global", "iframe", "wordpress"];

// export default function EmbedPlatformSelector({
//   embedMode,
//   setEmbedMode,
//   selectedPlatform,
//   setSelectedPlatform,
// }) {
//   return (
//     <Box sx={{ mb: 3 }}>
//       {/* Section Title */}
//       <Typography variant="h6" gutterBottom>
//         Choose Embed Mode & Platform
//       </Typography>

//       {/* Embed Mode Buttons */}
//       <ButtonGroup variant="outlined" sx={{ mb: 2 }}>
//         {embedModes.map((mode) => (
//           <Button
//             key={mode}
//             variant={embedMode === mode ? "contained" : "outlined"}
//             onClick={() => setEmbedMode(mode)}
//           >
//             {mode.charAt(0).toUpperCase() + mode.slice(1)}
//           </Button>
//         ))}
//       </ButtonGroup>

//       {/* Platform Buttons */}
//       <Box sx={{ display: "flex", gap: 1 }}>
//         {platforms.map((platform) => (
//           <Button
//             key={platform.value}
//             variant={
//               selectedPlatform === platform.value ? "contained" : "outlined"
//             }
//             onClick={() => setSelectedPlatform(platform.value)}
//           >
//             {platform.name}
//           </Button>
//         ))}
//       </Box>
//     </Box>
//   );
// }

// import React from "react";
// import {
//   Button,
//   ButtonGroup,
//   Typography,
//   Box,
//   FormControlLabel,
//   Switch,
// } from "@mui/material";

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

// const embedModes = ["instance", "global", "iframe", "wordpress"];

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
//     <Box sx={{ mb: 3 }}>
//       {/* Section Title */}
//       <Typography variant="h6" gutterBottom>
//         Choose Embed Mode & Platform
//       </Typography>

//       {/* Embed Mode Buttons */}
//       <ButtonGroup variant="outlined" sx={{ mb: 2 }}>
//         {embedModes.map((mode) => (
//           <Button
//             key={mode}
//             variant={embedMode === mode ? "contained" : "outlined"}
//             onClick={() => setEmbedMode(mode)}
//           >
//             {mode.charAt(0).toUpperCase() + mode.slice(1)}
//           </Button>
//         ))}
//       </ButtonGroup>

//       {/* Platform Buttons */}
//       <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
//         {platforms.map((platform) => (
//           <Button
//             key={platform.value}
//             variant={
//               selectedPlatform === platform.value ? "contained" : "outlined"
//             }
//             onClick={() => setSelectedPlatform(platform.value)}
//           >
//             {platform.name}
//           </Button>
//         ))}
//       </Box>

//       {/* Dark Mode & Editable Toggles */}
//       <Box sx={{ display: "flex", gap: 3 }}>
//         <FormControlLabel
//           control={
//             <Switch
//               checked={darkMode}
//               onChange={(e) => setDarkMode(e.target.checked)}
//             />
//           }
//           label="Dark Mode"
//         />
//         <FormControlLabel
//           control={
//             <Switch
//               checked={editable}
//               onChange={(e) => setEditable(e.target.checked)}
//             />
//           }
//           label="Editable"
//         />
//       </Box>
//     </Box>
//   );
// }

import React from "react";
import {
  Button,
  Typography,
  Box,
  Grid,
  FormControlLabel,
  Switch,
  Paper,
} from "@mui/material";

const embedModes = ["Multiple Sketch", "Single Sketch", "iframe"];

const platforms = [
  { name: "Blogger", value: "blogger" },
  { name: "WordPress", value: "wordpress" },
  { name: "Website", value: "website" },
  { name: "Medium", value: "medium" },
  { name: "Notion", value: "notion" },
  { name: "Squarespace", value: "squarespace" },
  { name: "Webflow", value: "webflow" },
  { name: "Wix", value: "wix" },
  { name: "GoDaddy", value: "godaddy" },
];

export default function EmbedPlatformSelector({
  embedMode,
  setEmbedMode,
  selectedPlatform,
  setSelectedPlatform,
  darkMode,
  setDarkMode,
  editable,
  setEditable,
}) {
  return (
    <div>
      <h4>Step 2: Choose your embed options</h4>
      <Paper elevation={4} sx={{ p: 3, borderRadius: 3 }}>
        {/* Section Title */}
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          Choose Embed Mode & Platform
        </Typography>

        {/* Embed Mode Buttons */}
        <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
          {embedModes.map((mode) => (
            <Button
              key={mode}
              variant={embedMode === mode ? "contained" : "outlined"}
              color="primary"
              onClick={() => setEmbedMode(mode)}
              sx={{ flex: 1, textTransform: "capitalize", borderRadius: 2 }}
            >
              {mode}
            </Button>
          ))}
        </Box>

        {/* Platforms Grid */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
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
                  textTransform: "capitalize",
                  fontWeight: 500,
                }}
              >
                {platform.name}
              </Button>
            </Grid>
          ))}
        </Grid>

        {/* Dark Mode & Editable Toggles */}
        {/* <Box sx={{ display: "flex", gap: 4 }}>
        <FormControlLabel
          control={
            <Switch
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
              color="primary"
            />
          }
          label="Dark Mode"
        />
        <FormControlLabel
          control={
            <Switch
              checked={editable}
              onChange={(e) => setEditable(e.target.checked)}
              color="secondary"
            />
          }
          label="Editable"
        />
      </Box> */}
      </Paper>
    </div>
  );
}

// Step 2: Choose your embed options
