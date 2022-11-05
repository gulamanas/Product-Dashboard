import DashOrderCompo from "./dash-order-component/DashOrderCompo";
import * as logo from "react-feather";
function DashOrder(props) {
  return (
    <div className="flex flex-row gap-4">
      <DashOrderCompo icon={logo.ShoppingCart} title={"Total Order"} value={43} />
      <DashOrderCompo icon={logo.Repeat} title={"Order Pending"} value={403} />
      <DashOrderCompo icon={logo.Truck} title={"Order Processing"} value={430} />
      <DashOrderCompo icon={logo.Check} title={"Order Delivered"} value={443} />
    </div>
  );
}
export default DashOrder;
