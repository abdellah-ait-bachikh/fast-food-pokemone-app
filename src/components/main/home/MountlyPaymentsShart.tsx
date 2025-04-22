import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts"; // Importing ApexOptions for correct typing
import { useSelector } from "react-redux";
import { TinitialState } from "@/type/statesTypes";

const MountlyPaymentsShart: React.FC = () => {
  const { theme,isAsideOpen } = useSelector((state: { app: TinitialState }) => state.app);
  const options: ApexOptions = {
    chart: {
      type: "area",
      zoom: {
        enabled: false,
      },
      width: "100%",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },

    xaxis: {
      categories: [
        "Jan",
        "Fév",
        "Mar",
        "Avr",
        "Mai",
        "Juin",
        "Juil",
        "Août",
        "Sep",
        "Oct",
        "Nov",
        "Déc",
      ], // mois de l'année
      title: {
        text: "Mois",
        style: {
          fontSize: "0.875rem", // Tailwind equivalent of text-sm
          fontWeight: "500", // Tailwind equivalent of font-medium
        },
      },
      labels: {
        style: {
          fontSize: "0.875rem", // Tailwind equivalent of text-sm
        },
      },
    },
    yaxis: {
      title: {
        text: "Recettes (en DH)",
        style: {
          fontSize: "0.875rem", // Tailwind equivalent of text-sm
          fontWeight: "500", // Tailwind equivalent of font-medium
        },
      },
      labels: {
        style: {
          fontSize: "0.875rem", // Tailwind equivalent of text-sm
        },
      },
    },
    tooltip: {
      x: {
        format: "dd MMM",
      },
      style: {
        fontFamily: "Arial, sans-serif",
        fontSize: "0.875rem",
      },
      theme: theme === "light" ? "light" : "dark",
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.7,
        opacityTo: 0.1,
      },
    },
    colors: ["#22c55e", "#3b82f6"], // Green for Sales in Money and Blue for Number of Orders
    legend: {
      position: "top", // Adjust the legend position to the top
      horizontalAlign: "center", // Center the legend horizontally
      onItemClick: {
        toggleDataSeries: true, // Allow user to toggle visibility of data series
      },
    },
    theme: {
      mode: theme === "light" ? "light" : "dark",
      palette: "palette1",
      monochrome: {
        enabled: false,
      },
    },
  };

  // Sample data: Recettes et nombre de commandes vendues pour chaque mois
  const series = [
    {
      name: "Recettes en argent", // Sales in money series
      data: [
        1500, 2500, 1800, 3000, 2000, 2300, 2900, 3200, 3500, 4000, 3800, 4200,
      ], // Example money values for each month
    },
    {
      name: "Nombre de commandes", // Number of orders series
      data: [500, 600, 550, 700, 650, 800, 900, 1000, 1100, 1200, 1300, 1400], // Example number of orders sold each month
    },
  ];

  return (
    <div className="mt-6 rounded-lg  w-full grid grid-cols-1 ">
      <Chart options={options} series={series} type="area" height={450} width='100%' />
    </div>
  );
};

export default MountlyPaymentsShart;
