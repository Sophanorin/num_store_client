import React from "react";
import "../styles/MessageBox.css";

function MessageBox(props) {
  const { success, danger } = props;
  return (
    <div className={`messageBox ${success ? success : danger}`}>
      <p>{props.children}</p>
    </div>
  );
}

export default MessageBox;
