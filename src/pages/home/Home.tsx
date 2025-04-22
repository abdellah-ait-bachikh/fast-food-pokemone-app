import DashboardSummary from "@/components/main/home/DashboardSummary";
import RankingBundle from "@/components/main/home/RankingBundle";
import RankingDelevery from "@/components/main/home/RankingDelevery";
import RankingProducts from "@/components/main/home/RankingProducts";

const Home = () => {
  return (
    <div className="w-full min-h-full">
      <DashboardSummary />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
        <RankingProducts />
        <div className="flex flex-col gap-2">
          <RankingBundle />
          <RankingDelevery />
        </div>
      </div>
    </div>
  );
};

export default Home;
