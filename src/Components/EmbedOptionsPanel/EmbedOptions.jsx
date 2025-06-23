import DropDownMenuOptions from "../DropDownOptions/DropDownMenuOptions";
import "./EmbedOptions.css";

const EmbedOptions = ({ label, dropdown, value }) => {
  return (
    <>
      <div>
        <div className="embed-option-container">
          <div className="iframe-mood"> {label} </div>
          <div className="value iframe-mood-button"> {value}</div>
          <div>
            <div className="iframe-mood-button "> {dropdown}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmbedOptions;
