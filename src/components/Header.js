import React from "react";

export default function Header() {
  return (
    <>
      <div
        style={{ zIndex: 100 }}
        className="fs-3  header d-flex align-items-center position-fixed justify-content-between"
      >
        <span className="fw-semibold">Lorem ipsum dolor sit.</span>
        <button className="header-button">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </>
  );
}
