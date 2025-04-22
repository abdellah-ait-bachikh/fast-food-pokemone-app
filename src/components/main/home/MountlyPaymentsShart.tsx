import React, { useEffect } from "react";
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
        enabled: true,
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
      ], 
      title: {
        text: "Mois",
        style: {
          fontSize: "0.875rem", 
          fontWeight: "500", 
        },
      },
      labels: {
        style: {
          fontSize: "0.875rem", 
        },
      },
    },
    yaxis: {
      title: {
        text: "Recettes (en DH)",
        style: {
          fontSize: "0.875rem", 
          fontWeight: "500", 
        },
      },
      labels: {
        style: {
          fontSize: "0.875rem", 
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
    colors: ["#22c55e", "#3b82f6"],
    legend: {
      position: "top", 
      horizontalAlign: "center", 
      onItemClick: {
        toggleDataSeries: true, 
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

  const series = [
    {
      name: "Recettes en argent", 
      data: [
        1500, 2500, 1800, 3000, 2000, 2300, 2900, 3200, 3500, 4000, 3800, 4200,
      ],
    },
    {
      name: "Nombre de commandes", 
      data: [500, 600, 550, 700, 650, 800, 900, 1000, 1100, 1200, 1300, 1400],
    },
  ];
  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
  }, [isAsideOpen]);
  return (
    <div className="mt-6 rounded-lg  w-full grid grid-cols-1 ">
      <Chart options={options} series={series} type="area" height={450} width='100%' />
    </div>
  );
};

export default MountlyPaymentsShart;
