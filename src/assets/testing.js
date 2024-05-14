import React from "react";

export default function Testing() {
  return (
    <div className="flex items-center gap-4">
      <div
        className=""
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <div>
          <img src="/happypeople.jpg" />
        </div>
        <div>
          <img src="/happy.jpg" />
        </div>
      </div>
      <div>
        <div>
          <img src={"/happyman.svg"} />
        </div>
      </div>
    </div>
  );
}
