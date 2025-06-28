// import React from "react";
// import "./ModeButtonGroup.css";

// export default function ModeButton({ label, isActive, onClick }) {
//   return (
//     <button
//       className={`instance-mode-button ${isActive ? "active" : ""}`}
//       onClick={onClick}
//     >
//       {label}
//     </button>
//   );
// }

// import React from "react";
// import "./ModeButtonGroup.css";

// export default function ModeButtonGroup({ value }) {
//   return (
//     <>
//       <div>
//         <button className="instance-mode-button">{value}</button>
//       </div>
//     </>
//   );
// }

import React from "react";
import Button from "@mui/material/Button";

export default function ModeButton({ label, isActive, onClick }) {
  return (
    <Button
      variant={isActive ? "contained" : "outlined"}
      color={label.toLowerCase().includes("copy") ? "primary" : "secondary"}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}
