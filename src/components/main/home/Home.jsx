import DashOverview from "../home/home-components/dash-overview/DashOverview";
import DashOrder from "../home/home-components/dash-order/DashOrder";
import DashStats from "./home-components/dash-stats/DashStats";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 w-full mt-4 ml-4">
      <DashOverview />
      <DashOrder />
      <DashStats />
    </div>
  );
};

export default Home;
