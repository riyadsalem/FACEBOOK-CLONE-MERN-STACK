import { useState } from "react";
import Bio from "./Bio";

export default function Detail({
  header,
  value,
  img,
  placeholder,
  name,
  handleChange,
  infos,
  updateDetails,
}) {
  const [show, setShow] = useState(true);
  return (
    <div>
      <div className="details_header">{header}</div>
      <div className="add_details_flex ">
        {value ? (
          <div className="info_profile ">
            <img src={`../../../icons/${img}.png`} alt="" />
            {value}
            <i className="edit_icon"></i>
          </div>
        ) : (
          <>
            <i className="rounded_plus_icon"></i>
            <span className="underline">Add {header}</span>
          </>
        )}
      </div>
      {show && (
        <Bio
          placeholder={placeholder}
          name={name}
          handleChange={handleChange}
          infos={infos}
          updateDetails={updateDetails}
        />
      )}
    </div>
  );
}
