import DashOverview from "../home/home-components/dash-overview/DashOverview";
import DashOrder from "../home/home-components/dash-order/DashOrder";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 mt-4 ml-4">
      <DashOverview />
      <DashOrder />
    </div>
  );
};

export default Home;
