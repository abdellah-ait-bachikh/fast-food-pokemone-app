import { Outlet } from "react-router-dom";
import Aside from "./components/main/Aside";
import Header from "./components/main/Header";

const Layout = () => {
  return (
    <>
      <Aside />
      <section className="flex-1 transition-width flex flex-col  overflow-x-auto relative">
        <Header />
        <main className="p-2 bg-gray-100 dark:bg-slate-950  z-[997] flex flex-grow w-full min-h-screen pt-[68px] h-[200vh]">
          <Outlet />
        </main>
      </section>
    </>
  );
};

export default Layout;
