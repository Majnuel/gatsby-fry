import * as React from "react";

const videoSyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginBottom: 15
};

const VideoComp = () => {
  return (
    <div style={videoSyle}>
      <iframe
        width="auto"
        height="auto"
        src="https://www.youtube.com/embed/OMdSDAp4Zu4?si=0Cj1wFXVsf2g8vOT"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoComp;
