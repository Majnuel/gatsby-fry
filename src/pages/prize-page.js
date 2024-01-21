import * as React from "react";
import Typewriter from "typewriter-effect";

const pageStyles = {
  backgroundColor: "black",
  color: "white",
  paddingTop: 30,
  paddingLeft: 20,
  paddingRight: 20,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  height: 999999
};

const Prize = () => {
  const [showImage, setShowImage] = React.useState(false);
  return (
    <div style={pageStyles}>
      <div>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "SAVE THE DATE: 24.08.2024 - KIDS IN MEINEM ALTER Tour 2024 - Parkbühne Wuhlheide, Berlin"
              )
              .callFunction(() => {
                console.log("String typed out!");
              })
              .pauseFor(1500)
              .callFunction(() => {
                console.log("All strings were deleted");
                setShowImage(true);
              })
              .start();
          }}
        />
      </div>
      {showImage ? (
        <img
          alt="deich kind"
          src="https://t2.genius.com/unsafe/680x680/https%3A%2F%2Fimages.genius.com%2F0c1654819b62489e98d3f1a6cdbe8f2e.1000x1000x1.png"
        />
      ) : null}
    </div>
  );
};

export default Prize;
