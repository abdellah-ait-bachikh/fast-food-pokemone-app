import DashboardSummary from "@/components/main/home/DashboardSummary";
import MountlyPaymentsShart from "@/components/main/home/MountlyPaymentsShart";
import RankingBundle from "@/components/main/home/RankingBundle";
import RankingDelevery from "@/components/main/home/RankingDelevery";
import RankingProducts from "@/components/main/home/RankingProducts";
import {
  fetchHomeData,
  getDashboardSummary,
  getRankingProductsData,
} from "@/redux/api/home.api";
import {
  setDashboardSummary,
  setError,
  setRankingProductsData,
} from "@/redux/slace/homeSlice";
import { AppDispatch, ThomeInitialState } from "@/type/statesTypes";
import { Alert, Spinner } from "@heroui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { error } = useSelector(
    (state: { home: ThomeInitialState }) => state.home
  );
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchHomeData(dispatch, setIsLoading);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="flex items-center w-full min-h-screen justify-center">
          <Spinner size="lg" color="warning" />
        </div>
      ) : error ? (
        <div className="w-full text-white">
          <Alert
            color="danger"
            description={error}
            title="Ereur"
            variant="faded"
          />
        </div>
      ) : (
        <div className="w-full min-h-full">
          <DashboardSummary />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3 ">
            <RankingProducts />
            <div className="grid grid-rows-2 grid-cols-1 gap-2 h-[400px] sm:h-[694px]  ">
              <RankingBundle />
              <RankingDelevery />
            </div>
          </div>
          <MountlyPaymentsShart />
        </div>
      )}
    </>
  );
};

export default Home;
