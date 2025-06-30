// import "./EmbedOptions.css";

// const EmbedOptions = ({ label, dropdown, value }) => {
//   return (
//     <>
//       <div>
//         <div className="embed-option-container">
//           <div className="iframe-mood"> {label} </div>
//           <div className="value iframe-mood-button"> {value}</div>
//           <div>
//             <div className="iframe-mood-button "> {dropdown}</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EmbedOptions;

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const EmbedOptions = ({ label, value, options, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        bgcolor: "#f6f6f6",
        px: 2,
        py: 1,
        borderRadius: 2,
        mt: 2,
        width: "100%",
        maxWidth: 400,
      }}
    >
      <Typography variant="body2" sx={{ minWidth: 100 }}>
        {label}:
      </Typography>
      <Typography variant="body2" sx={{ minWidth: 80, fontWeight: 500 }}>
        {/* {value} */}
      </Typography>
      <FormControl fullWidth size="small" sx={{ minWidth: 120 }}>
        <InputLabel id={`${label}-label`}>{label}</InputLabel>
        <Select
          labelId={`${label}-label`}
          value={value}
          label={label}
          onChange={handleChange}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option} className="drop-down-menu">
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default EmbedOptions;
