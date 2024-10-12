"use client";

import React, {useEffect} from "react";
import styles from "../app/styles/styles.module.css";

const Soal = () => {

  return (
    <div>
      <div className={`${styles["container-modify"]}`}>
        <div className="row">
          <div className="col-12 col-md-2">
            <div className={`${styles["bg-card-col2"]} card bg-light`}>
              <div className="card-body">
                <h5 className="card-title">
                  Question: <b>1</b>
                </h5>
                <p className="card-text" style={{ fontSize: "15px" }}>
                  Select one of the multiple-choice answers! Once finished,
                  click the <b>Submit</b> button and proceed to the next question.
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

          <div className="col-12 col-md-10">
            <div className="card border-0">
              <div className="card-body shadow rounded-4">
                <p className="text-primary">Soal: 1/20</p>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
                <div>
                  <div className="card bg-success-subtle border-success mb-2">
                    <div className="card-body">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Quae, aperiam.
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="card bg-danger-subtle border-danger">
                    <div className="card-body">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Quae, aperiam.
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-end mt-2">
                  <button type="button" className="btn btn-primary">Submit</button>
                  <button type="button" className="btn btn-primary ms-2">Next</button>
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
