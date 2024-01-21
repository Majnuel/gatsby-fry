import * as React from "react";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import VideoComp from "../components/video-component";
import QuestionComponent from "../components/question-component";

const pageStyles = {
  backgroundColor: "black",
  color: "white",
  paddingTop: 30,
  paddingLeft: 20,
  paddingRight: 20,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  height: 999999
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320
};
const headingAccentStyles = {
  color: "#663399"
};
const paragraphStyles = {
  marginBottom: 48
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%"
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25
};

const marginBottom15 = {
  marginBottom: 15
};

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8"
};

const buttonStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "6px 10px",
  display: "inline-block",
  position: "relative",
  top: -1,
  marginLeft: 10,
  lineHeight: 1
};

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1
};

const IndexPage = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [showQuestionBtn, setshowQuestionBtn] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [hideQuestionBtn, sethideQuestionBtn] = useState(true);
  const [showIntro, setShowIntro] = useState(true);

  const handleShowQuestionBtn = () => {
    setShowQuestion(true);
    sethideQuestionBtn(false);
  };

  return (
    <main style={pageStyles}>
      {showIntro ? (
        <Typewriter
          options={{
            strings: ["Hallo", "and"],
            autoStart: true,
            loop: false
          }}
          onInit={(typewriter) => {
            typewriter
              .callFunction(() => {
                setShowVideo(true);
                setShowIntro(false);
                setTimeout(() => {
                  setshowQuestionBtn(true);
                  console.log("showQuestionBtn: ", showQuestionBtn);
                }, 1500);
                console.log("String typed out!");
              })
              .pauseFor(9000000)
              // .deleteAll()
              .callFunction(() => {
                console.log("All strings were deleted");
              })
              .start();
          }}
        />
      ) : null}

      {/* <Typewriter
        options={{
          strings: [
            "Hallo Fry",
            "and happy birthday",
            "Wenn du dein Geschenk haben möchtest, du muss dieses einfache Spiel gewinnen",
            "What franchise does the melody in the video belong to?"
          ],
          autoStart: true,
          loop: false
        }}
      /> */}
      {showVideo ? <VideoComp /> : null}

      {showQuestionBtn && hideQuestionBtn ? (
        <div style={marginBottom15}>
          {" "}
          Ready? tap
          <button style={buttonStyle} onClick={handleShowQuestionBtn}>
            here
          </button>
        </div>
      ) : null}

      {showQuestion ? <QuestionComponent></QuestionComponent> : null}
    </main>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Home Page</title>

    <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
  </>
);
