import { FiDollarSign } from "react-icons/fi";
import { FaFileInvoiceDollar, FaMotorcycle } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { Tooltip } from "@heroui/react";

const DashboardSummary = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
      {/* Total commandes */}
      <Tooltip
        content={"245"}
        showArrow
        color="success"
        classNames={{
          content: "dark:text-black font-semibold tracking-wide",
        }}
        size="lg"
      >
        <div className="rounded-xl   overflow-hidden  bg-gradient-to-br from-success via-success-300 to-success-100 p-4 text-white shadow-lg flex items-center gap-4">
          <div className="text-4xl xl:text-5xl">
            <FaFileInvoiceDollar />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Commandes</h3>
            <p className="text-2xl font-bold mt-2">245</p>
          </div>
        </div>
      </Tooltip>

      {/* Commandes sur place */}
      <Tooltip
        content={"143"}
        showArrow
        color="warning"
        classNames={{
          content: "dark:text-black font-semibold tracking-wide",
        }}
        size="lg"
      >
        <div className="rounded-xl overflow-hidden  bg-gradient-to-br from-warning-600 via-warning-300 to-warning-100 p-4 text-white shadow-lg flex items-center gap-4">
          <div className="text-4xl xl:text-5xl">
            <BsShop />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Sur place</h3>
            <p className="text-2xl font-bold mt-2">143</p>
          </div>
        </div>
      </Tooltip>
      {/* Commandes avec livraison */}
      <Tooltip
        content={"102"}
        showArrow
        color="primary"
        classNames={{
          content: "dark:text-black font-semibold tracking-wide",
        }}
        size="lg"
      >
        <div className="rounded-xl overflow-hidden  bg-gradient-to-br from-primary via-primary-300 to-primary-100 p-4 text-white shadow-lg flex items-center gap-4">
          <div className="text-4xl xl:text-5xl">
            <FaMotorcycle />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Livraison</h3>
            <p className="text-2xl font-bold mt-2">102</p>
          </div>
        </div>
      </Tooltip>
      {/* Total gains */}
      <Tooltip
        content={"10,236.00"}
        showArrow
        color="foreground"
        classNames={{
          content: "dark:text-black font-semibold tracking-wide",
        }}
        size="lg"
      >
        <div className="rounded-xl overflow-hidden  bg-gradient-to-br from-default via-default-300 to-default-100 p-4 text-white shadow-lg flex items-center gap-4">
          <div className="text-4xl xl:text-5xl">
            <FiDollarSign />
          </div>
          <div className="w-full">
            <h3 className="text-lg font-semibold">Total (DH)</h3>
            <p className="text-2xl font-bold mt-2">10 k</p>
          </div>
        </div>
      </Tooltip>
    </div>
  );
};

export default DashboardSummary;
