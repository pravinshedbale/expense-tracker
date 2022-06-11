import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = ({ dataPoints }) => {
  const dpValues = dataPoints.map((dp) => dp.value);
  const totalMaximum = Math.max(...dpValues);
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
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
