import { Link, Outlet } from "react-router-dom";
import * as logo from "react-feather";

const SideNav = () => {
  return (
    <div className="flex">
      <aside className="flex-shrink-0 w-64 h-screen shadow-sm bg-red-300">
        <div className="logo">
          <p className="text-3xl font-bold">
            <Link to="/">Brand Name</Link>
          </p>
        </div>
        <ul className="flex flex-col ">
          <li className="flex">
            <logo.AlertCircle />
            <Link to="/">Dashboard</Link>
          </li>
          <li className="flex">
            <logo.AlignCenter />
            <Link to="/products">Products</Link>
          </li>
          <li className="flex">
            <logo.AlignCenter />
            <a href="#">Category</a>
          </li>
          <li className="flex">
            <logo.AlignCenter />
            <a href="#">Customers</a>
          </li>
          <li className="flex">
            <logo.AlignCenter />
            <a href="#">Orders</a>
          </li>
          <li className="flex">
            <logo.AlignCenter />
            <a href="#">Coupons</a>
          </li>
          <li className="flex">
            <logo.AlignCenter />
            <a href="#">Our Staff</a>
          </li>
          <li className="flex">
            <logo.AlignCenter />
            <a href="#">Setting</a>
          </li>
        </ul>
      </aside>
      <Outlet />
    </div>
  );
};

export default SideNav;
