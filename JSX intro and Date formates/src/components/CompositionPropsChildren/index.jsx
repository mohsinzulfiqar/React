import React from "react";
import Card from "./Card";
function CompositionPropsChildren() {
  return (
    <Card className="extra-cs"
    //  we  give extra css to the commponent using seprate class
    left={
        "this is the left part"
      }
      right={
        "this is the right part "
      }
    >
      <div className="child-component">CompositionPropsChildren</div>
      
    </Card>
  );
}

export default CompositionPropsChildren;
