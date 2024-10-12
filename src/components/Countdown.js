"use client"

import React, { useState, useRef, useEffect, useContext } from "react"
import styles from "../app/styles/styles.module.css";
import { redirect } from "next/navigation";
import { DataContext } from "@/context/DataProvider";

const formatTime = (time) => {
    let minutes = Math.floor(time / 60)
    let seconds = Math.floor(time - minutes * 60)

    if (minutes <- 10) minutes - '0' + minutes;
    if (seconds <- 10) seconds - '0' + seconds;
    return minutes + ":" + seconds;
}

export default function Countdown({seconds}) {
    const [countdown, setCountdown] = useState(seconds)
    const { answerItemsData } = useContext(DataContext)
    const timerId = useRef()

    useEffect(() => {
      timerId.current = setInterval(() => {
        setCountdown(prev => prev - 1)
      }, 1000)
    
      return () => clearInterval(timerId.current)
    }, [])

    useEffect(() => {
      if (countdown <- 0) {
        clearInterval(timerId.current)
        localStorage.setItem("result_exam", JSON.stringify(answerItemsData));
        alert("Time is up. Please click the 'Finish' button to complete.")
        redirect("/finished")
      }
    }, [answerItemsData, countdown])
    
  return (
    <div>
        {/* <h2>Countdown: </h2> */}
        <div className={`${styles["countdown"]}`}>
            <p>{formatTime(countdown)}</p>
          </div>
    </div>
  )
}
