import DashOverviewCompo from "./dash-overview-component/DashOverviewCompo";
import * as logo from "react-feather";
function DashOverview(props) {
  return (
    <div className="flex flex-col gap-4">
      <DashOverviewCompo
        icon={logo.Layers}
        title={"Today Order"}
        amount={345}
        backgroundColor="bg-teal-500"
      />
      <DashOverviewCompo
        icon={logo.ShoppingCart}
        title={"This Month"}
        amount={5656}
        // backgroundColor="Green"
      />
      <DashOverviewCompo
        icon={logo.CreditCard}
        title={"This Year"}
        amount={935456}
        // backgroundColor="Yellow"
      />
    </div>
  );
  // 3 components here
}
export default DashOverview;
