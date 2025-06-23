import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const DropDownMenu = ({ options, selected, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuButton = () => {
    setIsOpen(function (prev) {
      return !prev;
    });
  };

  const handleSelectMode = (option) => {
    console.log("Selected:", option);
    onChange(option);
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <button className="drop-menu-button" onClick={toggleMenuButton}>
          {selected}{" "}
          <FontAwesomeIcon
            icon={isOpen ? faCaretUp : faCaretDown}
            className="fa-CaretUp"
          />
        </button>
        {isOpen && (
          // <ul>
          //   {options.map((option) => {
          //     return (
          //       <li key={option} onClick={() => handleSelectMode(option)}>
          //         {option}
          //       </li>
          //     );
          //   })}
          // </ul>
          <ul>
            {options.map((option) => (
              <li key={option} onClick={() => handleSelectMode(option)}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default DropDownMenu;
