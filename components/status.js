import React from "react";

export default function Status({ status }) {
  return (
    <div
      className={`badge  ${
        status === "Alive"
          ? "badge-success"
          : status === "Dead"
          ? "badge-error"
          : "badge-secondary"
      }`}
    >
      {status}
    </div>
  );
}
