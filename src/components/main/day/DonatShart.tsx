import { ApexOptions } from 'apexcharts';
import React from 'react'
import Chart from "react-apexcharts";

const DonatShart = () => {
    const options: ApexOptions = {
        chart: {
            type: "donut",
        },
        labels: ['fromage', "thone",],
        // colors: ["#22c55e", "#3b82f6", "#f97316"],
        legend: {
            position: "bottom",
        },
    };

    const series: ApexAxisChartSeries = [20, 90];

    return (
        <div className="p-2 flex justify-center">
            <Chart
                options={options}
                series={series}
                type="donut"
                width="350"

            />
        </div>
    )
}

export default DonatShart