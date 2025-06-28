// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

// const DropDownMenu = ({ options, selected, onChange }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenuButton = () => {
//     setIsOpen(function (prev) {
//       return !prev;
//     });
//   };

//   const handleSelectMode = (option) => {
//     console.log("Selected:", option);
//     onChange(option);
//     setIsOpen(false);
//   };

//   return (
//     <>
//       <div>
//         <button className="drop-menu-button" onClick={toggleMenuButton}>
//           {selected}{" "}
//           <FontAwesomeIcon
//             icon={isOpen ? faCaretUp : faCaretDown}
//             className="fa-CaretUp"
//           />
//         </button>
//         {isOpen && (
//           <ul>
//             {options.map((option) => (
//               <li key={option} onClick={() => handleSelectMode(option)}>
//                 {option}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </>
//   );
// };

// export default DropDownMenu;

// import React from "react";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";

// const DropDownMenu = ({
//   options,
//   selected,
//   onChange,
//   label = "Select Mode",
// }) => {
//   const handleChange = (event) => {
//     onChange(event.target.value);
//   };

//   return (
//     <FormControl fullWidth size="small">
//       <InputLabel id="dropdown-label">{label}</InputLabel>
//       <Select
//         labelId="dropdown-label"
//         value={selected}
//         label={label}
//         onChange={handleChange}
//       >
//         {options.map((option) => (
//           <MenuItem key={option} value={option}>
//             {option}
//           </MenuItem>
//         ))}
//       </Select>
//     </FormControl>
//   );
// };

// export default DropDownMenu;
