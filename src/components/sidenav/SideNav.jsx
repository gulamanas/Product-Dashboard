import { Link, Outlet } from "react-router-dom";
import * as logo from "react-feather";

const SideNav = () => {
  return (
    <div className="flex">
      <aside className="flex-shrink-0 w-64 h-screen shadow-sm">
        <div className="logo">
          <p className="text-3xl font-bold">
            <Link to="/">Brand Name</Link>
          </p>
        </div>
        <ul className="flex flex-col ">
          <li className="py-4 pr-4 border-l-[#707275] border-l-4 text-[#707275]">
            <Link to="/" className="flex">
              <span className=" outline-none px-4">
                <logo.Trello />
              </span>
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="flex">
            <logo.ShoppingBag />
            <Link to="/products">Products</Link>
          </li>
          <li className="flex">
            <logo.Menu />
            <a href="#">Category</a>
          </li>
          <li className="flex">
            <logo.Users />
            <a href="#">Customers</a>
          </li>
          <li className="flex">
            <logo.Compass />
            <a href="#">Orders</a>
          </li>
          <li className="flex">
            <logo.Gift />
            <a href="#">Coupons</a>
          </li>
          <li className="flex">
            <logo.User />
            <a href="#">Our Staff</a>
          </li>
          <li className="flex">
            <logo.Settings />
            <a href="#">Setting</a>
          </li>
        </ul>
      </aside>
      <Outlet />
    </div>
  );
};

export default SideNav;
