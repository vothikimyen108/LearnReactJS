import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  //khai báo biến  lấy dữ liệu value của các tháng chi bao nhiêu
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  // lấy đc giá trị của 1 tháng chi nhiều nhất là giá trị Max
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
