import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  //khai báo biên ban đầu bằng 0 %
  let barFillHeight = "0%";
  //nếu giá trih Max 0 thì barFill Height thay đổi %
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }} //   thay đổi giá trị trong style
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
