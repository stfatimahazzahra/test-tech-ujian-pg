"use client";

import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/styles.module.css";
import exam from "../../services/exam-api";
import { useRouter } from "next/navigation";
import { DataContext } from "@/context/DataProvider";

const Soal = () => {
  const router = useRouter();
  const { answerItemsData, setAnswerItemsData } = useContext(DataContext)
  const [dataSoal, setDataSoal] = useState([]);
  const [currQuestionNumber, setCurrQuestionNumber] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentValue, setCurrentValue] = useState("");
  const [isAnswerCorrect, setIsAnswerCorret] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const [disabledButtonNext, setDisabledButtonNext] = useState(true);
  const [disabledButtonSend, setDisabledButtonSend] = useState(false);
  // const [answerItems, setAnswerItems] = useState({
  //   totalQuestion: null,
  //   totalAnswer: null,
  //   totalRightAnswer: null,
  // });

  const checkAnswer = (answer) => {
    if (!isSend) {
      setIsSend(true);
      setDisabledButtonNext(false);
      setDisabledButtonSend(true);
      currentQuestion.correctAnswer === answer
        ? setIsAnswerCorret(true)
        : setIsAnswerCorret(false);
    }
    setAnswerItemsData((prevData) => ({
      ...prevData,
      totalAnswer: prevData.totalAnswer + 1,
      totalRightAnswer:
        prevData.totalRightAnswer +
        (currentQuestion.correctAnswer === answer ? 1 : 0),
    }))
  };

  const nextQuestion = () => {
    setCurrentQuestion("");
    setCurrentValue("");
    setIsAnswerCorret(false);
    setIsSend(false);
    setDisabledButtonNext(true);
    setDisabledButtonSend(false);
    setCurrQuestionNumber((prevValue) => prevValue + 1);
  };

  const finishExam = () => {
    localStorage.setItem("result_exam", JSON.stringify(answerItemsData));
    router.push("/finished");
  };

  useEffect(() => {
    exam.get().then((response) => {
      setDataSoal(response?.data?.data);
      setAnswerItemsData((prevData) => ({
        ...prevData,
        totalQuestion: response?.data?.data?.length,
      }))
    });
  }, [setAnswerItemsData]);


  useEffect(() => {
    setCurrentQuestion(dataSoal[currQuestionNumber - 1]);
  }, [currQuestionNumber, currentQuestion, dataSoal]);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const message = "You have unsaved changes, do you really want to leave?";
      event.returnValue = message;
      return message;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div>
      <div className={`${styles["container-modify"]} mt-5`}>
        <div className={`${styles["grid-column"]} row`}>
          <div
            className={`${styles["grid-column-responsive"]} col-12 col-md-2`}
          >
            <div className={`${styles["bg-card-col2"]} card bg-light`}>
              <div className="card-body">
                <h5 className="card-title">
                  Question: <b>{currQuestionNumber}</b>
                </h5>
                <p className="card-text" style={{ fontSize: "15px" }}>
                  Select one of the multiple-choice answers! Once finished,
                  click the Submit button and proceed to the next question.
                </p>
                <div className="card bg-success-subtle border-success">
                  <div className="card-body">
                    <p className="card-text" style={{ fontSize: "12px" }}>
                      Green means correct.
                    </p>
                  </div>
                </div>
                <div className="card bg-danger-subtle border-danger mt-2">
                  <div className="card-body">
                    <p className="card-text" style={{ fontSize: "12px" }}>
                      Red means incorrect
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${styles["grid-column-responsive"]} col-12 col-md-10`}
          >
            <div className="card border-0">
              <div className="card-body shadow rounded-4 mb-5">
                <p className="text-primary">Soal: {currQuestionNumber}/20</p>
                <p className="card-text">{currentQuestion?.question}</p>
                <div>
                  {currentQuestion?.options?.map((option, i) => (
                    <div
                      className={`card mb-2 ${
                        isSend &&
                        isAnswerCorrect &&
                        currentQuestion.correctAnswer === option.label
                          ? "bg-success-subtle border-success"
                          : isSend &&
                            !isAnswerCorrect &&
                            currentValue === option.label
                          ? "bg-danger-subtle border-danger"
                          : isSend &&
                            !isAnswerCorrect &&
                            currentQuestion.correctAnswer === option.label
                          ? "bg-success-subtle border-success"
                          : ""
                      }`}
                      key={option.label} // Use a unique identifier like "option.label" if possible
                    >
                      <div className="card-body">
                        <label htmlFor={option.label} className="w-100" style={{ cursor: "pointer" }}>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="soal"
                              id={option.label}
                              value={option.label}
                              onChange={() => setCurrentValue(option.label)}
                            />
                            <span className="form-check-label">
                              {option.value}
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-end mt-2">
                  <button
                    type="button"
                    className="btn btn-primary"
                    disabled={
                      disabledButtonSend ||
                      (isSend === false && currentValue === "")
                    }
                    onClick={() => checkAnswer(currentValue)}
                  >
                    Send
                  </button>

                  {currQuestionNumber < answerItemsData.totalQuestion ? (
                    <button
                      type="button"
                      className="btn btn-primary ms-2"
                      disabled={disabledButtonNext || isSend === false}
                      onClick={nextQuestion}
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-success ms-2"
                      onClick={finishExam}
                      disabled={answerItemsData.totalAnswer !== answerItemsData.totalQuestion}
                    >
                      Finish
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Soal;
