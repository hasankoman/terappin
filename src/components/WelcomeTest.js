import React from "react";
import { useDispatch } from "react-redux";
import { welcome } from "../store/questionSlice";
import ProgressBar from "./ProgressBar";

export default function WelcomeTest() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="container test-body fs-5 ">
        <div>
          <img
            src="https://images.unsplash.com/photo-1579781354199-1ffd36bd7d30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
            style={{ width: 200 + "px" }}
          />
        </div>
        <div className="mt-4">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            ratione voluptate voluptatem. Consectetur, assumenda quisquam.
          </p>
        </div>
        <button
          onClick={() => dispatch(welcome(false))}
          className="d-inline-block welcome-button py-2 px-4 rounded-3 mt-3"
        >
          Başla
        </button>
        <ProgressBar />
      </div>
    </>
  );
}
