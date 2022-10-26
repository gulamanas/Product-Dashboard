import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/main/Main";
import Home from "./components/main/home/Home";
import SideNav from "./components/sidenav/SideNav";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SideNav />}>
          <Route path="/*" element={<Main />} />
          <Route index element={<Home />} />

          {/* <Route path="/products" element={<Products />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
