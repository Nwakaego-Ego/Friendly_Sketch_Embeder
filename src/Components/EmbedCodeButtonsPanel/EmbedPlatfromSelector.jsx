import React from "react";
import PlatformInstructionDisplay from "./PlatformInstructionDisplay";

import { Button, Grid, Typography, Paper, Box } from "@mui/material";

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
  { name: "How to use Codepen", value: "codepen" },
];

export default function EmbedPlatformSelector({
  selectedPlatform,
  setSelectedPlatform,
}) {
  return (
    <div>
      <h4>Step 2: Choose your platform</h4>

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
    </div>
  );
}
