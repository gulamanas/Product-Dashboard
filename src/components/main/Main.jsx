import { Route, Routes } from "react-router-dom";
import Products from "./products/Products";

const Main = () => {
  return (
    <main className=''>
      <Routes>
        <Route path='/products' element={<Products />} />
      </Routes>
    </main>
  );
};

export default Main;
