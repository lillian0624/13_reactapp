import React from "react";
import TestContext from "../store/testContext";

const A = () => {
  return (
    <div>
      <TestContext.Consumer>
        {(cts) => {
          return (
            <div>
              {cts.name}-{cts.age}
            </div>
          );
        }}
      </TestContext.Consumer>
    </div>
  );
};

export default A;
