import React from "react";

function Card(props) {
  const styleClass="mian-card " + props.className;

  return (
    <div className={styleClass}>
      {/* this is our main Card component where we already style according to the main card now which class we add on other page on component now we get that class using "props.className" and concat with the current class in this way we access the same properties which use in on other page same components  */}
      {props.children}
      this is the card components
      {/* <div style={{ background: "red" }}>{props.left}</div>
      <div style={{ background: "green" }}>{props.right}</div> */}
    </div>
  );
}

export default Card;
