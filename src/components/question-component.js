import * as React from "react";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import WrongAnswerComponent from "./wrong-answer-component";
import { Link } from "gatsby";

const inputStyle = {
  color: "black",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  padding: "5px"
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

const displayFlex = {
  paddingTop: 20,
  marginBottom: 20,
  display: "Flex",
  flexDirection: "row",
  justifyContent: "center"
};

const redeemButtonStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 15,
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

const marginY = {
  marginBottom: 15,
  marginTop: 15
};

const marginLeft = {
  marginLeft: 15
};

const QuestionComponent = () => {
  const [answer, setAnswer] = useState("");
  const [maxattempts, setmaxattempts] = useState(false);
  const [priceState, setPriceState] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [showPrizeBtn, setShowPrizeBtn] = useState(false);
  const [showQuestionInput, setShowQuestionInput] = useState(false);
  const [wrongAnswerPhrase, setWrongAnswerPhrase] = useState("");

  const winningMsg = "Congratulations, tap to redeem your prize :)";

  const question = "What franchise does the melody belong to?";
  const wrongAnswerPhrases = [
    "Come on...",
    "Try again",
    "mmhhhh...",
    "you said the music was 'intoxicating'",
    "its fast and blue",
    "it wears gloves",
    "it has spikes on its back",
    "it loves shiny rings (like you)",
    "really?!? watch the video again"
  ];

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleCheckAnswer = () => {
    const correctAnswer = "sonic";
    if (answer != correctAnswer && attempts != 8) {
      setAttempts(attempts + 1);
      setWrongAnswerPhrase(wrongAnswerPhrases[attempts]);
      console.log("wrongAnswerPhrase", wrongAnswerPhrase);
      if (attempts > 8) {
        setmaxattempts(true);
      }
      console.log("attempts: ", attempts);
    }

    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      setPriceState(true);
    }
  };

  const handleToVideo = () => {
    window.location.assign("https://youtu.be/OMdSDAp4Zu4");
  };

  return (
    <div>
      {!priceState ? (
        <div style={marginY}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(question)
                .callFunction(() => {
                  console.log("String typed out!");
                  setShowQuestionInput(true);
                })
                .pauseFor(2500)
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
            }}
          />
          {showQuestionInput ? (
            <div style={marginY}>
              <input
                type="text"
                style={inputStyle}
                value={answer}
                onChange={handleAnswerChange}
                placeholder="Type your answer here"
              />
              <button
                style={(marginLeft, buttonStyle)}
                onClick={handleCheckAnswer}
              >
                Check Answer
              </button>
            </div>
          ) : null}
        </div>
      ) : null}

      <p>
        {attempts == 0 || priceState ? null : (
          <div key={attempts}>
            <WrongAnswerComponent value={wrongAnswerPhrase} />
          </div>
        )}
      </p>
      {wrongAnswerPhrases[attempts] == "really?!? watch the video again:" ? (
        <p>
          <p onClick={handleToVideo}>to video</p>
        </p>
      ) : null}
      <div>
        {priceState ? (
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(winningMsg)
                .callFunction(() => {
                  console.log("String typed out!");
                  setShowPrizeBtn(true);
                })
                .pauseFor(2500)
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
            }}
          />
        ) : null}
      </div>
      {showPrizeBtn ? (
        <div style={displayFlex}>
          <Link to="prize-page">
            <button style={redeemButtonStyle}>Redeem</button>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default QuestionComponent;
