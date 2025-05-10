import { ApexOptions } from 'apexcharts';
import React from 'react'
import Chart from "react-apexcharts";

const DonatShart = ({data}:{data:{labels:string[],series:number[]}}) => {
    const options: ApexOptions = {
        chart: {
            type: "donut",
        },
        labels: data.labels,
        // colors: ["#22c55e", "#3b82f6", "#f97316"],
        legend: {
            show: false,
        },
    };

    const series: ApexNonAxisChartSeries = data.series;

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