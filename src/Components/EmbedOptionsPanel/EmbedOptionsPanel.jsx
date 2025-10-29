import React from "react";
import EmbedOptions from "./EmbedOptions";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import PlayPauseButtons from "../EmbedOptionsPanel/PlayPauseButtons";
import { Paper, Typography } from "@mui/material";

const EmbedOptionsPanel = ({
  mode,
  setMode,
  theme,
  setTheme,
  asset,
  setAsset,
  editable,
  setEditable,
  setShouldRun,
  shouldRun,
}) => {
  return (
    <Paper
      elevation={3}
      sx={{
        px: 3,
        py: 2,
        mt: 4,
        ml: 1,
        borderRadius: 3,
        maxWidth: 400,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 2,
        }}
      >
        <Typography variant="subtitle1" fontWeight="bold">
          Sketch Controls:
        </Typography>
        <PlayPauseButtons shouldRun={shouldRun} setShouldRun={setShouldRun} />
      </Box>

      <EmbedOptions
        label="Theme"
        value={theme}
        options={["Dark", "Light"]}
        onChange={setTheme}
      />
      <EmbedOptions
        label="Asset"
        value={asset}
        options={["Sound"]}
        onChange={setAsset}
      />

      <Box mt={2}>
        <FormControlLabel
          control={
            <Switch
              checked={editable}
              onChange={() => setEditable((prev) => !prev)}
              color="primary"
            />
          }
          label="Make Code Editable"
        />
      </Box>
    </Paper>
  );
};

export default EmbedOptionsPanel;
