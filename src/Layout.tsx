import { Outlet } from "react-router-dom";
import Aside from "./components/main/Aside";
import Header from "./components/main/Header";

const Layout = () => {
  return (
    <>
      <Aside />
      <section className="flex-grow bg-amber-100 min-h-[200vh] transition-width ">
        <Header />
        <Outlet />
      </section>
    </>
  );
};

export default Layout;
