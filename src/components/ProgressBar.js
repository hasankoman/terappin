import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ProgressBar() {
  const { counter } = useSelector((state) => state.question);

  return (
    <>
      <div className="progress">
        <div
          class="progress-bar"
          style={{
            width:
              (counter.currentQuestionCounter / counter.allQuestionCounter) *
                100 +
              "%",
          }}
        ></div>
      </div>
    </>
  );
}
