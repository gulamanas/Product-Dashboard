import { Line, Pie } from "react-chartjs-2";
function ChartCompo(props) {
  return (
    <div style={{ width: "400px" }}>
      <Line options={props.lineOptions} data={props.lineData} />
      <Pie data={props.pieData} />
    </div>
  );
}

export default ChartCompo;
