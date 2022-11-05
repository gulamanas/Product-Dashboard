import { Line } from "react-chartjs-2";
function ChartCompo(props) {
  return (
    <div>
      <Line options={props.options} data={props.data} />
    </div>
  );
}

export default ChartCompo;
