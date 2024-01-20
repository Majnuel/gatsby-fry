import * as React from "react";
import { useState } from "react";
import Typewriter from "typewriter-effect";

const inputStyle = {
  color: "black",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  padding: "5px"
};

const QuestionComponent = () => {
  const [answer, setAnswer] = useState("");
  const [maxattempts, setmaxattempts] = useState(false);
  const [priceState, setPriceState] = useState(false);
  const winningMsg = "Congratulations, click to redeem your prize :)";
  const [attempts, setAttempts] = useState(0);
  const [showPrize, setShowPrize] = useState(false);
  const [showPrizeBtn, setShowPrizeBtn] = useState(false);
  const [showQuestionInput, setShowQuestionInput] = useState(false);

  const question = "What franchise does the melody belong to?";
  const wrongAnswerPhrases = [
    "",
    "Come on",
    "Try again",
    "mmhhhh...",
    "you said the music was intoxicating",
    "its fast and blue",
    "it wears gloves",
    "it has spikes on its back",
    "really?!? watch the video again:"
  ];

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleCheckAnswer = () => {
    const correctAnswer = "sonic";
    if (answer != correctAnswer && attempts != 8) {
      setAttempts(attempts + 1);
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
        <div>
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
            <div>
              <input
                type="text"
                style={inputStyle}
                value={answer}
                onChange={handleAnswerChange}
                placeholder="Type your answer here"
              />
              <button onClick={handleCheckAnswer}>Check Answer</button>
            </div>
          ) : null}
        </div>
      ) : null}

      <div></div>
      {/* <p>{attempts == 0 || priceState ? null : wrongAnswerPhrases[attempts]}</p> */}
      <p>
        {attempts == 0 || priceState ? null : (
          <Typewriter
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
          />
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
      {showPrizeBtn ? <button onClick={handleRedeem}>Redeem</button> : null}
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
                  .pauseFor(2500)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default QuestionComponent;
