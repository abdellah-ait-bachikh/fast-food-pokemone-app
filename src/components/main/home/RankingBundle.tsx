import { app_uri, formatDateShort, formatNumberShort } from "@/lib/utils";
import { ThomeInitialState } from "@/type/statesTypes";
import { Accordion, AccordionItem, Avatar, Tooltip } from "@heroui/react";
import React from "react";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { useSelector } from "react-redux";

const RankingBundle = () => {
  const { rankingOffersData } = useSelector(
    (state: { home: ThomeInitialState }) => state.home
  );
  return (
    <div className="bg-white  dark:bg-slate-800 rounded-xl px-2 pb-2   overflow-y-auto relative">
      {rankingOffersData && (
        <>
          <div className="sticky top-0 right-0 left-0 w-full p-2 backdrop-blur-sm z-[997]">
            <div className="flex gap-3 flex-nowrap items-center">
              <HiOutlineCheckBadge className="text-3xl" />
              <h1 className="text-2xl font-semibold">Meilleurs Packes</h1>
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

                <th className="px-3 py-2 whitespace-nowrap font-semibold text-left">
                  Crée Le
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {rankingOffersData.length > 0 ? (
                rankingOffersData.map((item) => (
                  <tr
                    className="*:text-gray-900 *:first:font-medium dark:*:text-white"
                    key={item.id}
                  >
                    <td className="px-3 py-2 whitespace-nowrap">
                      <Avatar
                        isBordered
                        src={
                          item.imageUri
                            ? `${app_uri}/files/images/${item.imageUri}`
                            : "/images/empty.png"
                        }
                        radius="sm"
                        className="bg-transparent"
                        size="lg"
                      />
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">{item.name}</td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <Tooltip content={item.quantity}>
                        <span>{formatNumberShort(item.quantity)}</span>
                      </Tooltip>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {formatDateShort(new Date(item.createdAt))}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4}>
                    <div className="w-full text-center py-8">  Aucun pack vendu trouvé</div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default RankingBundle;
