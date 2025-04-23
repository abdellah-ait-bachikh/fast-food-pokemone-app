import { Accordion, AccordionItem, Avatar } from "@heroui/react";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import { FaRankingStar } from "react-icons/fa6";

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
    <div className=" rounded-xl  grid grid-cols-1 gap-2 ">
      <div className="bg-white dark:bg-slate-800 rounded-xl px-2 pb-2 h-[400px]  overflow-y-auto relative">
        <div className="sticky top-0 right-0 left-0 w-full p-2 backdrop-blur-sm z-[997]">
          <div className="flex gap-3 flex-nowrap items-center">
            <FaRankingStar className="text-3xl" />
            <h1 className="text-2xl font-semibold">Meilleurs produits</h1>{" "}
          </div>
        </div>
        <Accordion selectionMode="multiple" variant="light">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => (
            <AccordionItem
              key={e}
              aria-label={`Produits ${e}`}
              startContent={<Avatar  src="/images/tacos.png" className="bg-transparent" size="lg"/>}
              subtitle="436"
              title="Tacos Mixte"
              classNames={{base:"dark:bg-slate-800"}}
            >
              {e} Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Iusto ratione temporibus voluptate libero, modi adipisci corrupti
              reprehenderit, assumenda sapiente repellat illo dicta iure
              recusandae possimus quaerat nesciunt. Eveniet, porro nobis!
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="p-2 m-auto">
        <Chart options={options} series={series} type="donut" width="100%" />
      </div>
    </div>
  );
};

export default RankingProducts;
