import { Outlet } from "react-router-dom";
import Aside from "./components/main/Aside";
import Header from "./components/main/Header";

const Layout = () => {
  return (
    <>
      <Aside />
      <section className="flex-1 transition-width flex flex-col ">
        <Header />
        <main className="p-2 bg-gray-100 dark:bg-slate-950  z-[997] flex flex-grow w-full ">
          <Outlet />
        </main>
      </section>
    </>
  );
};

export default Layout;
