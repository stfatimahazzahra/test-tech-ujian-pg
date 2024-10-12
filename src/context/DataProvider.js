"use client"

import { createContext, useState } from "react"

export const DataContext = createContext()

const DataProvider = ({ children }) => {
  const [countDown, setCountDown] = useState(600)
  const [answerItemsData, setAnswerItemsData] = useState({
    totalQuestion: null,
    totalAnswer: null,
    totalRightAnswer: null,
  });
  const sharedData = 1200

  return (
    <DataContext.Provider
      value={{
        data: sharedData,
        answerItemsData: answerItemsData,
        setAnswerItemsData: setAnswerItemsData,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
