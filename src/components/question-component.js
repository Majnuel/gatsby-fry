import * as React from "react";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import WrongAnswerComponent from "./wrong-answer-component";

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
  const [showPrize, setShowPrize] = useState(false);
  const [showPrizeBtn, setShowPrizeBtn] = useState(false);
  const [showQuestionInput, setShowQuestionInput] = useState(false);
  const [wrongAnswerPhrase, setWrongAnswerPhrase] = useState("");
  const [showImage, setShowImage] = useState(false);

  const winningMsg = "Congratulations, click to redeem your prize :)";

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

  const handleRedeem = () => {
    setShowPrize(true);
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

      {/* <p>{attempts == 0 || priceState ? null : wrongAnswerPhrases[attempts]}</p> */}
      <p>
        {attempts == 0 || priceState ? null : (
          <div key={attempts}>
            <WrongAnswerComponent value={wrongAnswerPhrase} />
            {/* <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(wrongAnswerPhrases[attempts])
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(2500)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            /> */}
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
          <button style={redeemButtonStyle} onClick={handleRedeem}>
            Redeem
          </button>
        </div>
      ) : null}
      <div>
        {showPrize ? (
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
        ) : null}
        {showImage ? (
          <img
            alt="deich kind"
            src="https://t2.genius.com/unsafe/680x680/https%3A%2F%2Fimages.genius.com%2F0c1654819b62489e98d3f1a6cdbe8f2e.1000x1000x1.png"
          />
        ) : null}
      </div>
    </div>
  );
};

export default QuestionComponent;
