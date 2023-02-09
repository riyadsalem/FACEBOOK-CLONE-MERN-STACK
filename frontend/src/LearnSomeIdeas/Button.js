import React from "react";
const randomColour = () => "#" + ((Math.random() * 0xffffff) << 0).toString(16);

function Button(props) {
  return (
    <>
      <div>
        <button style={{ background: randomColour() }} onClick={props.onClick}>
          {props.children}
        </button>
      </div>
    </>
  );
}

export default React.memo(Button); // PURE Function
