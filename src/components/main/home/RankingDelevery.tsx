import { Accordion, AccordionItem, User } from "@heroui/react";
import React from "react";
import { PiShootingStarThin } from "react-icons/pi";
import { FaMotorcycle } from "react-icons/fa6";

const RankingDelevery = () => {
  return (
    <div className="bg-white   dark:bg-slate-800 rounded-xl px-2 pb-2   overflow-y-auto">
      <div className="sticky top-0 right-0 left-0 w-full p-2 backdrop-blur-sm z-[997]">
        <div className="flex gap-3 flex-nowrap items-center">
          <PiShootingStarThin className="text-3xl" />
          <h1 className="text-2xl font-semibold">Livreurs</h1>{" "}
        </div>
      </div>
      <div className=" relative">
        <table className="min-w-full divide-y-2 divide-gray-200 dark:divide-gray-700 ">
          <thead className="ltr:text-left rtl:text-right sticky  top-[54px] left-0 right-0 h-[41px] backdrop-blur-sm z-[996]">
            <tr className=" *:text-gray-900 dark:*:text-white">
              <th className="px-3 py-2 whitespace-nowrap font-semibold text-left">
                Nome
              </th>
              <th className="px-3 py-2 whitespace-nowrap font-semibold text-left">
                Commandes
              </th>

              <th className="px-3 py-2 whitespace-nowrap font-semibold text-left">
              Montant Collecté (DH)
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            <tr className="*:text-gray-900 *:first:font-medium dark:*:text-white">
              <td className="px-3 py-2 whitespace-nowrap">
                <User name="Livreur 1" description="19/10/1678" avatarProps={{icon:<FaMotorcycle size={23}/>}} />
              </td>
              <td className="px-3 py-2 whitespace-nowrap">90</td>
              <td className="px-3 py-2 whitespace-nowrap">300</td>
            </tr>

            <tr className="*:text-gray-900 *:first:font-medium dark:*:text-white">
              <td className="px-3 py-2 whitespace-nowrap">
                <User name="Livreur 1" description="19/10/1678" />
              </td>
              <td className="px-3 py-2 whitespace-nowrap">90</td>

              <td className="px-3 py-2 whitespace-nowrap">260</td>
            </tr>

            <tr className="*:text-gray-900 *:first:font-medium dark:*:text-white">
              <td className="px-3 py-2 whitespace-nowrap">
              <User name="Livreur 1" description="19/10/1678" />

              </td>
              <td className="px-3 py-2 whitespace-nowrap">90</td>

              <td className="px-3 py-2 whitespace-nowrap">703</td>
            </tr>

            <tr className="*:text-gray-900 *:first:font-medium dark:*:text-white">
              <td className="px-3 py-2 whitespace-nowrap">                <User name="Livreur 1" description="19/10/1678" />
              </td>
              <td className="px-3 py-2 whitespace-nowrap">90</td>

              <td className="px-3 py-2 whitespace-nowrap">510</td>
            </tr>

            <tr className="*:text-gray-900 *:first:font-medium dark:*:text-white">
              <td className="px-3 py-2 whitespace-nowrap">
                           <User name="Livreur 1" description="19/10/1678" />

              </td>
              <td className="px-3 py-2 whitespace-nowrap">10</td>
              <td className="px-3 py-2 whitespace-nowrap">90</td>
            </tr>
            <tr className="*:text-gray-900 *:first:font-medium dark:*:text-white">
              <td className="px-3 py-2 whitespace-nowrap">
                           <User name="Livreur 1" description="19/10/1678" />

              </td>
              <td className="px-3 py-2 whitespace-nowrap">10</td>
              <td className="px-3 py-2 whitespace-nowrap">90</td>
            </tr>
            <tr className="*:text-gray-900 *:first:font-medium dark:*:text-white">
              <td className="px-3 py-2 whitespace-nowrap">
                           <User name="Livreur 1" description="19/10/1678" />

              </td>
              <td className="px-3 py-2 whitespace-nowrap">10</td>
              <td className="px-3 py-2 whitespace-nowrap">90</td>
            </tr>
            <tr className="*:text-gray-900 *:first:font-medium dark:*:text-white">
              <td className="px-3 py-2 whitespace-nowrap">
                           <User name="Livreur 1" description="19/10/1678" />

              </td>
              <td className="px-3 py-2 whitespace-nowrap">10</td>
              <td className="px-3 py-2 whitespace-nowrap">90</td>
            </tr>
            <tr className="*:text-gray-900 *:first:font-medium dark:*:text-white">
              <td className="px-3 py-2 whitespace-nowrap">
                           <User name="Livreur 1" description="19/10/1678" />

              </td>
              <td className="px-3 py-2 whitespace-nowrap">10</td>
              <td className="px-3 py-2 whitespace-nowrap">90</td>
            </tr>
            <tr className="*:text-gray-900 *:first:font-medium dark:*:text-white">
              <td className="px-3 py-2 whitespace-nowrap">
                           <User name="Livreur 1" description="19/10/1678" />

              </td>
              <td className="px-3 py-2 whitespace-nowrap">10</td>
              <td className="px-3 py-2 whitespace-nowrap">90</td>
            </tr>
            <tr className="*:text-gray-900 *:first:font-medium dark:*:text-white">
              <td className="px-3 py-2 whitespace-nowrap">
                           <User name="Livreur 1" description="19/10/1678" />

              </td>
              <td className="px-3 py-2 whitespace-nowrap">10</td>
              <td className="px-3 py-2 whitespace-nowrap">90</td>
            </tr>
            <tr className="*:text-gray-900 *:first:font-medium dark:*:text-white">
              <td className="px-3 py-2 whitespace-nowrap">
                           <User name="Livreur 1" description="19/10/1678" />

              </td>
              <td className="px-3 py-2 whitespace-nowrap">10</td>
              <td className="px-3 py-2 whitespace-nowrap">90</td>
            </tr>
            <tr className="*:text-gray-900 *:first:font-medium dark:*:text-white">
              <td className="px-3 py-2 whitespace-nowrap">
                           <User name="Livreur 1" description="19/10/1678" />

              </td>
              <td className="px-3 py-2 whitespace-nowrap">10</td>
              <td className="px-3 py-2 whitespace-nowrap">90</td>
            </tr>
            <tr className="*:text-gray-900 *:first:font-medium dark:*:text-white">
              <td className="px-3 py-2 whitespace-nowrap">
                           <User name="Livreur 1" description="19/10/1678" />

              </td>
              <td className="px-3 py-2 whitespace-nowrap">10</td>
              <td className="px-3 py-2 whitespace-nowrap">90</td>
            </tr>
            <tr className="*:text-gray-900 *:first:font-medium dark:*:text-white">
              <td className="px-3 py-2 whitespace-nowrap">
                           <User name="Livreur 1" description="19/10/1678" />

              </td>
              <td className="px-3 py-2 whitespace-nowrap">10</td>
              <td className="px-3 py-2 whitespace-nowrap">90</td>
            </tr>
            <tr className="*:text-gray-900 *:first:font-medium dark:*:text-white">
              <td className="px-3 py-2 whitespace-nowrap">
                           <User name="Livreur 1" description="19/10/1678" />

              </td>
              <td className="px-3 py-2 whitespace-nowrap">10</td>
              <td className="px-3 py-2 whitespace-nowrap">90</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RankingDelevery;
