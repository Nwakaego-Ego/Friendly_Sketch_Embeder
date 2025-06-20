import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import "./EmbedOptions.css";

const EmbedOptionsPanel = ({ label, value }) => {
  return (
    <>
      <div>
        <div className="embed-option-container">
          <div className="iframe-mood"> {label} </div>
          <div>
            <button className="iframe-mood-button">
              {" "}
              {value}
              <FontAwesomeIcon icon={faCaretUp} className="fa-CaretUp" />{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmbedOptionsPanel;
