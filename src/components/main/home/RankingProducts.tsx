import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

const RankingProducts = () => {
  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: ["Burgers", "Fries", "Drinks"],
    colors: ["#22c55e", "#3b82f6", "#f97316"],
    legend: {
      position: "bottom",
    },
  };

  const series = [44, 55, 41];

  return (
    <div className=" rounded-xl  grid grid-cols-1 lg:grid-cols-2 gap-2 ">
      <div className="bg-white dark:bg-slate-800 rounded-xl p-2">
        RankingProducts
      </div>
      <div className="bg-white dark:bg-slate-800 rounded-xl p-2">
        <Chart options={options} series={series} type="donut" width="100%" />
      </div>
    </div>
  );
};

export default RankingProducts;
