"use client"

import React, { useState } from "react"
import styles from "../app/styles/styles.module.css"
import Countdown from "./Countdown"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [timer, setTimer] = useState(1200)
  const pathname = usePathname()

  return (
    <div>
      <nav className={`${styles["bg-navbar"]} navbar navbar-expand-lg`}>
        <div className="container">
          <a className="navbar-brand text-light fs-3">
            Quiz
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {pathname === "/soal" ? (
            <Countdown seconds={pathname === "/soal" && timer} />
          ) : (
            <div className="bg-white text-black py-2 px-3 rounded">0:0</div>
          )}
        </div>
      </nav>
    </div>
  )
}
