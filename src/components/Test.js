import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

const question = {
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam repellendus itaque accusamus eum, quasi quam cum est explicabo deserunt eos magni eaque ullam voluptatem nulla.",
  options: ["Doğru", "Yanlış"],
};

export default function Test() {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [answeredOption, setAnsweredOption] = useState(null);

  const handleClick = (option) => {
    setAnsweredOption(option);
    setLoading(true);
  };

  useEffect(() => {
    if (loading) {
      setLoading(true);
      setButtonDisabled(true);
    }
  }, [loading, answeredOption]);

  return (
    <>
      <div className="container test-body fs-5">
        <div className="mt-4 fw-bold">
          <p>{question.text}</p>
        </div>
        <div className="d-flex flex-column w-75 mx-auto gap-4 mt-4">
          {question.options.map((option) => {
            return (
              <button
                onClick={() => handleClick(option)}
                key={option}
                className={` test-button py-2 rounded-3 position-relative`}
                disabled={buttonDisabled}
              >
                <span className="hidden-text">dasd</span>
                <span style={{ zIndex: 100 }} className="option-text">
                  {option}
                </span>
                <div
                  className={`position-absolute button-progress-bar ${
                    option === answeredOption ? "active" : ""
                  } `}
                ></div>
              </button>
            );
          })}
        </div>
        <ProgressBar />
      </div>
    </>
  );
}
