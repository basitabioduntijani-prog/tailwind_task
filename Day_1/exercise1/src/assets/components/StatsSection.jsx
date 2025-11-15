import React from "react";
import StatsBox from "./StatsBox.jsx";

function StatsSection() {
  return (
    <div className="mt-5 px-6 grid grid-cols-3 gap-3">
      <StatsBox value="12k" label="Followers" />
      <StatsBox value="420" label="Posts" />
      <StatsBox value="9.8k" label="Likes" />
    </div>
  );
}

export default StatsSection;
