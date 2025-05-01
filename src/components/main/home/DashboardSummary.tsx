import { FiDollarSign } from "react-icons/fi";
import { FaFileInvoiceDollar, FaMotorcycle } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { Spinner, Tooltip } from "@heroui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDashboardSummary } from "@/redux/api/home.api";
import { AppDispatch, ThomeInitialState } from "@/type/statesTypes";
import { formatMoneyMAD, formatNumberShort } from "@/lib/utils";

const DashboardSummary = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { dashboardSummary } = useSelector(
    (state: { home: ThomeInitialState }) => state.home
  );
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    dispatch(
      getDashboardSummary(() => {
        setIsLoading(false);
      })
    );
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="w-full flex justify-center py-4">
          <Spinner size="lg" />
        </div>
      ) : (
        dashboardSummary && (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            <Tooltip
              content={dashboardSummary.totalOrders}
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
                  <p className="text-2xl font-bold mt-2">
                    {formatNumberShort(dashboardSummary.totalOrders)}
                  </p>
                </div>
              </div>
            </Tooltip>

            <Tooltip
              content={dashboardSummary.dineInOrders}
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
                  <p className="text-2xl font-bold mt-2">
                    {formatNumberShort(dashboardSummary.dineInOrders)}
                  </p>
                </div>
              </div>
            </Tooltip>

            <Tooltip
              content={dashboardSummary.deliveryOrders}
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
                  <p className="text-2xl font-bold mt-2">
                    {formatNumberShort(dashboardSummary.deliveryOrders)}
                  </p>
                </div>
              </div>
            </Tooltip>

            <Tooltip
              content={formatMoneyMAD(dashboardSummary.totalRevenue)}
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
                  <p className="text-2xl font-bold mt-2">
                    {formatNumberShort(dashboardSummary.totalRevenue)}
                  </p>
                </div>
              </div>
            </Tooltip>
          </div>
        )
      )}
    </>
  );
};

export default DashboardSummary;
