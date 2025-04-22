import DashboardSummary from "@/components/main/home/DashboardSummary";
import MountlyPaymentsShart from "@/components/main/home/MountlyPaymentsShart";
import RankingBundle from "@/components/main/home/RankingBundle";
import RankingDelevery from "@/components/main/home/RankingDelevery";
import RankingProducts from "@/components/main/home/RankingProducts";

const Home = () => {
  return (
    <div className="w-full min-h-full">
      <DashboardSummary />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3 ">
        <RankingProducts />
        <div className="grid grid-rows-2 grid-cols-1 gap-2 h-[400px] sm:h-[694px]  ">
          <RankingBundle />
          <RankingDelevery />
        </div>
      </div>
      <MountlyPaymentsShart/>
    </div>
  );
};

export default Home;
