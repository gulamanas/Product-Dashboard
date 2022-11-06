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
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  ArcElement,
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
      borderWidth: 3,
    },
    {
      label: "Order",
      data: [10, 15, 190],
      backgroundColor: "#F44236",
      borderColor: "#F44236",
      borderWidth: 3,
    },
  ],
};

export const pieData = {
  labels: ["Item-1", "Item-2", "Item-3", "Item-4"],
  datasets: [
    {
      label: "Sales",
      data: [10, 20, 30, 40],
      backgroundColor: ["#10b981", "#3b82f6", "#f97316", "#0ea5e9"],
      borderColor: ["#fff"],
      borderWidth: 3,
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
            <button type="button">Order</button>
          </li>
        </ul>
      </div>
      {/* <Line options={options} data={data} /> */}
      <ChartCompo
        lineOptions={lineOptions}
        lineData={lineData}
        pieData={pieData}
      />
    </div>
  );
}
export default DashStatsCompo;
