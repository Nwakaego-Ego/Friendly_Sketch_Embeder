import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function WelcomeModal({ isOpen, onClose }) {
  return (
    <Dialog
      open={!!isOpen}
      onClose={onClose}
      TransitionComponent={Transition}
      keepMounted
      aria-labelledby="welcome-dialog-title"
      aria-describedby="welcome-dialog-description"
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle id="welcome-dialog-title" sx={{ fontWeight: 700 }}>
        Welcome to the p5.js Sketch Embedder Tool
      </DialogTitle>

      <DialogContent dividers>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 1 }}>
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: 2,
              bgcolor: "primary.main",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "primary.contrastText",
              fontWeight: 700,
              fontSize: 24,
            }}
          >
            p5
          </Box>

          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Embed, Preview, and Share your p5.js sketches easily
            </Typography>
            <DialogContentText id="welcome-dialog-description" sx={{ mt: 1 }}>
              This tool helps you embed your p5.js sketches into blogs,
              websites, and other platforms. Edit code, preview sketches, and
              generate ready-to-use embed code for your chosen platform.
            </DialogContentText>
          </Box>
        </Box>

        <Box component="ul" sx={{ pl: 3, mt: 1, mb: 0 }}>
          <li>Paste or write your sketch in the editor</li>
          <li>Use Play to preview the sketch</li>
          <li>Choose platform and embed mode</li>
          <li> And Finally Open in Codepen</li>
        </Box>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Button onClick={onClose} variant="contained" color="primary">
          Begin
        </Button>
      </DialogActions>
    </Dialog>
  );
}
