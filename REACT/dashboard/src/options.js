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
import { Line } from "react-chartjs-2";
import { DoughnutChart } from "./DoughnutChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Earnings Overview",
    },
  },
};
const labels = ["Jan", "Mar", "May", "July", "Sept", "Nov"];

export const data = {
  labels,
  datasets: [
    {
      label: "Earnings",
      data: labels.map(() => Math.floor(Math.random() * 40000 + 1)),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};
export function DashboardChart() {
  return (
    <div className="dashboard-chart">
      <div className="dashboard-chart1">
        <Line options={options} data={data} />
      </div>
      <div className="dashboard-chart2">
        <DoughnutChart />
      </div>
    </div>
  );
}
