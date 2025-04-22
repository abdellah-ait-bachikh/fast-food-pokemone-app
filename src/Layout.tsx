import { Outlet } from "react-router-dom";
import Aside from "./components/main/Aside";
import Header from "./components/main/Header";

const Layout = () => {
  return (
    <>
      <Aside />
      <section className="flex-1    min-h-[200vh] transition-width flex flex-col overflow-clip ">
        <Header />
        <main className="p-2 bg-gray-100 dark:bg-slate-950  z-[997] flex flex-grow w-full ">
          <Outlet />
        </main>
      </section>
    </>
  );
};

export default Layout;
