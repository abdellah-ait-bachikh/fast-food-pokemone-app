import { app_uri, formatNumberShort } from "@/lib/utils";
import { getRankingProductsData } from "@/redux/api/home.api";
import { AppDispatch, ThomeInitialState } from "@/type/statesTypes";
import { Avatar, Spinner, Tooltip } from "@heroui/react";
import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { FaRankingStar } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

const RankingProducts = () => {
  const { rankingProductsData } = useSelector(
    (state: { home: ThomeInitialState }) => state.home
  );

  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: rankingProductsData ? rankingProductsData?.shart?.labels : [],
    // colors: ["#22c55e", "#3b82f6", "#f97316"],
    legend: {
      show:false
    },
  };

  const series = rankingProductsData ? rankingProductsData?.shart?.series : [];

  return (
    <div className=" rounded-xl  grid grid-cols-1 gap-2 ">
      {rankingProductsData && rankingProductsData?.rankingProducts && (
        <>
          <div className="bg-white dark:bg-slate-800 rounded-xl px-2 pb-2 h-[400px]  overflow-y-auto relative">
            <div className="sticky top-0 right-0 left-0 w-full p-2 backdrop-blur-sm z-[997]">
              <div className="flex gap-3 flex-nowrap items-center">
                <FaRankingStar className="text-3xl" />
                <h1 className="text-2xl font-semibold">Meilleurs produits</h1>
              </div>
            </div>
            <table className="min-w-full divide-y-2 divide-gray-200 dark:divide-gray-700 ">
              <thead className="ltr:text-left rtl:text-right sticky top-[54px] left-0 right-0 h-[41px] backdrop-blur-sm">
                <tr className=" *:text-gray-900 dark:*:text-white">
                  <th className="px-3 py-2 whitespace-nowrap font-semibold text-left">
                    Image
                  </th>
                  <th className="px-3 py-2 whitespace-nowrap font-semibold text-left">
                    Nome
                  </th>

                  <th className="px-3 py-2 whitespace-nowrap font-semibold text-left">
                    Quantité
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {rankingProductsData.rankingProducts.length > 0 ? (
                  rankingProductsData.rankingProducts.map((e) => (
                    <tr
                      className="*:text-gray-900 *:first:font-medium dark:*:text-white"
                      key={e.id}
                    >
                      <td className="px-3 py-2 whitespace-nowrap">
                        <Avatar
                          isBordered
                          src={
                            e.category.imageUri
                              ? `${app_uri}/files/images/${e.category.imageUri}`
                              : "/images/empty.png"
                          }
                          radius="sm"
                          className="bg-transparent"
                          size="lg"
                        />
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap">
                        {e.category.name + " " + e.name}
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap">
                        <Tooltip content={e.quantity}>
                          <span>{formatNumberShort(e.quantity)}</span>
                        </Tooltip>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3}>
                      <div className="w-full text-center py-8">
                        {" "}
                        Aucun Produits vendu trouvé
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
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
      )}
    </div>
  );
};

export default RankingProducts;
