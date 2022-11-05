// import { Line } from "react-chartjs-2";
import ChartCompo from "./ChartCompo/ChartCompo";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["2017", "2018", "2019"];

const lineOptions = {
  // plugins: {
  //   legend: {
  //     position: "bottom",
  //   },
  // },
};

export const lineData = {
  labels,
  datasets: [
    {
      label: "Sales",
      data: [74, 201, 72],
      backgroundColor: "#10B981",
      borderColor: "#10B981",
    },
    {
      label: "Order",
      data: [37, 42, 20],
      backgroundColor: "#F44236",
      borderColor: "#F44236",
    },
  ],
};

function DashStatsCompo() {
  return (
    <div>
      <p>Weekly Sales</p>
      <div>
        <ul>
          <li>
            <button type="button">Sales</button>
          </li>
          <li>
            <button type="button">Sales</button>
          </li>
        </ul>
      </div>
      {/* <Line options={options} data={data} /> */}
      <ChartCompo options={lineOptions} data={lineData} />
    </div>
  );
}
export default DashStatsCompo;
