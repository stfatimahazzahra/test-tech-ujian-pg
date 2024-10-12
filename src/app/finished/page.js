'use client'

import React, { useEffect, useState } from "react";
import styles from "../styles/styles.module.css";
import { useRouter } from "next/navigation";

const Finised = () => {
  const router = useRouter()
  const [answerItems, setAnswerItems] = useState({
    totalQuestion: null,
    totalAnswer: null,
    totalRightAnswer: null
  })

  const clearItems = () => {
    localStorage.removeItem('result_exam');
    router.push('/')
  }

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('result_exam'));
    if (items) {
      setAnswerItems(items)
    }
  }, [])

  return (
    <div>
      <div className="mt-5">
        <div className={`${styles["container-modify"]}`}>
          <div className={`${styles["bg-card-col2"]} card bg-light`}>
            <div className="card-body">
              <p className="card-text">
                Congratulations! You have successfully completed the exam. Here
                is the number of correct answers
              </p>
              <p className="card-text text-primary">
                You obtained: <b>{answerItems.totalRightAnswer}/{answerItems.totalQuestion}</b>
              </p>
              <p className="card-text text-primary">
                Your score: <b>{answerItems.totalRightAnswer / 2}</b>
              </p>
              <p className="card-text">
                We hope the results are satisfying and meet your expectations.
                Thank you for participating, and best of luck in your future
                endeavors!
              </p>
              <button type="button" className="btn btn-primary text-end" onClick={clearItems}>
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finised;
