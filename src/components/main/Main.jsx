import { Outlet, Route, Routes } from "react-router-dom";
import Products from "./products/Products";

const Main = () => {
  return (
    <main className="">
      <Outlet />
      <Routes>
        <Route path="/products" element={<Products />} />
      </Routes>
    </main>
  );
};

export default Main;
