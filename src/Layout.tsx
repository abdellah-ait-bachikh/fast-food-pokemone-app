import { Outlet } from "react-router-dom";
import Aside from "./components/main/Aside";
import Header from "./components/main/Header";

const Layout = () => {
  return (
    <>
      <Aside />
      <section className="flex-grow  bg-gray-100 dark:bg-slate-950 min-h-[200vh] transition-width ">
        <Header />
       <main className="p-4"><Outlet /></main> 
      </section>
    </>
  );
};

export default Layout;
