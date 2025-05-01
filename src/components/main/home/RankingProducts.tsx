import { app_uri } from "@/lib/utils";
import { getRankingProductsData } from "@/redux/api/home.api";
import {
  AppDispatch,
  ThomeInitialState,
  TinitialState,
} from "@/type/statesTypes";
import { Accordion, AccordionItem, Avatar, Spinner } from "@heroui/react";
import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { FaRankingStar } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

const RankingProducts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch<AppDispatch>();
  const { rankingProductsData } = useSelector(
    (state: { home: ThomeInitialState }) => state.home
  );
  useEffect(() => {
    dispatch(
      getRankingProductsData(() => {
        setIsLoading(false);
      })
    );
  }, []);
  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: rankingProductsData?.shart.labels,
    // colors: ["#22c55e", "#3b82f6", "#f97316"],
    legend: {
      position: "bottom",
    },
  };

  const series = rankingProductsData?.shart.series;

  return (
    <div className=" rounded-xl  grid grid-cols-1 gap-2 ">
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      ) : (
        rankingProductsData && (
          <>
            <div className="bg-white dark:bg-slate-800 rounded-xl px-2 pb-2 h-[400px]  overflow-y-auto relative">
              <div className="sticky top-0 right-0 left-0 w-full p-2 backdrop-blur-sm z-[997]">
                <div className="flex gap-3 flex-nowrap items-center">
                  <FaRankingStar className="text-3xl" />
                  <h1 className="text-2xl font-semibold">Meilleurs produits</h1>
                </div>
              </div>
              <Accordion selectionMode="multiple" variant="light">
                {rankingProductsData.rankingProducts.map((e) => (
                  <AccordionItem
                    key={e.id}
                    aria-label={`Produits ${e}`}
                    startContent={
                      <Avatar
                        src={
                          e.category.imageUri
                            ? `${app_uri}/files/images/${e.category.imageUri}`
                            : "/images/empty.png"
                        }
                        className="bg-transparent"
                        size="lg"
                      />
                    }
                    subtitle={e.quantity}
                    title={e.category.name + " " + e.name}
                    classNames={{ base: "dark:bg-slate-800" }}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Iusto ratione temporibus voluptate libero, modi adipisci
                    corrupti reprehenderit, assumenda sapiente repellat illo
                    dicta iure recusandae possimus quaerat nesciunt. Eveniet,
                    porro nobis!
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="p-2 m-auto">
              <Chart
                options={options}
                series={series}
                type="donut"
                width="100%"
              />
            </div>
          </>
        )
      )}
    </div>
  );
};

export default RankingProducts;
