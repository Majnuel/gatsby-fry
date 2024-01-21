import * as React from "react";
import Typewriter from "typewriter-effect";

const WrongAnswerComponent = ({ value }) => {
  console.log("from child: ", value);
  return (
    <div>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(value)
            .callFunction(() => {
              console.log("String typed out!");
            })
            .deleteAll()
            .callFunction(() => {
              console.log("All strings were deleted");
            })
            .start();
        }}
      />
    </div>
  );
};

export default WrongAnswerComponent;
