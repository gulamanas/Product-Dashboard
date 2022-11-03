import { Link, Outlet } from "react-router-dom";
import * as logo from "react-feather";

const SideNav = () => {
  return (
    <div className='flex'>
      <aside className='flex-shrink-0 w-64 h-screen shadow-sm'>
        <div className='logo'>
          <p className='text-3xl font-bold'>
            <Link to='/'>Brand Name</Link>
          </p>
        </div>
        <ul className='flex flex-col mt-5'>
          <li className='py-4 pr-4 border-teal-500 border-l-4 text-teal-500 hover:border-teal-500 hover:text-teal-500'>
            <Link to='/' className='flex'>
              <span className='outline-none px-4'>
                <logo.Trello />
              </span>
              <span className='font-bold'>Dashboard</span>
            </Link>
          </li>
          <li className='py-4 pr-4 border-l-[#fff] border-l-4 text-[#707275] hover:border-teal-500 hover:text-teal-500'>
            <Link to='/products' className='flex'>
              <span className='outline-none px-4'>
                <logo.ShoppingBag />
              </span>
              <span className='font-bold'>Products</span>
            </Link>
          </li>
          <li className='py-4 pr-4 border-l-[#fff] border-l-4 text-[#707275] hover:border-teal-500 hover:text-teal-500'>
            <Link to='/' className='flex'>
              <span className='outline-none px-4'>
                <logo.Menu />
              </span>
              <span className='font-bold'>Category</span>
            </Link>
          </li>
          <li className='py-4 pr-4 border-l-[#fff] border-l-4 text-[#707275] hover:border-teal-500 hover:text-teal-500'>
            <Link to='/' className='flex'>
              <span className='outline-none px-4'>
                <logo.Users />
              </span>
              <span className='font-bold'>Customers</span>
            </Link>
          </li>
          <li className='py-4 pr-4 border-l-[#fff] border-l-4 text-[#707275] hover:border-teal-500 hover:text-teal-500'>
            <Link to='/' className='flex'>
              <span className='outline-none px-4'>
                <logo.Compass />
              </span>
              <span className='font-bold'>Orders</span>
            </Link>
          </li>
          <li className='py-4 pr-4 border-l-[#fff] border-l-4 text-[#707275] hover:border-teal-500 hover:text-teal-500'>
            <Link to='/' className='flex'>
              <span className='outline-none px-4'>
                <logo.Gift />
              </span>
              <span className='font-bold'>Coupons</span>
            </Link>
          </li>
          <li className='py-4 pr-4 border-l-[#fff] border-l-4 text-[#707275] hover:border-teal-500 hover:text-teal-500'>
            <Link to='/' className='flex'>
              <span className='outline-none px-4'>
                <logo.User />
              </span>
              <span className='font-bold'>Our Staff</span>
            </Link>
          </li>
          <li className='py-4 pr-4 border-l-[#fff] border-l-4 text-[#707275] hover:border-teal-500 hover:text-teal-500'>
            <Link to='/' className='flex'>
              <span className='outline-none px-4'>
                <logo.Settings />
              </span>
              <span className='font-bold'>Setting</span>
            </Link>
          </li>
        </ul>
      </aside>
      <Outlet />
    </div>
  );
};

export default SideNav;
