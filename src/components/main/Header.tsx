import ThemeToggle from "../ui/ThemeToggle";
import AsideToogle from "../ui/AsideToogle";
import { Avatar, User } from "@heroui/react";
import { useSelector } from "react-redux";
import { TinitialState } from "@/type/statesTypes";
import classNames from "classnames";

const Header = () => {
  const { isAsideOpen } = useSelector((state: { app: TinitialState }) => state.app)
  return (
    <header className={classNames("p-3 bg-amber-500/60 dark:bg-slate-900/60 backdrop-blur-md  z-[998] fixed top-0 right-0 transition-left", {
      'left-0 md:left-[72px]': !isAsideOpen,
      'left-0 md:left-[220px]': isAsideOpen,
    })}>
      <div className="w-full flex items-center justify-between">
        <AsideToogle />
        <div className="flex items-center gap-2 ">
          <ThemeToggle />
          <User name="mohamed chaha" description="@Admin" classNames={{ base: 'flex-row-reverse', wrapper: 'items-end', description: 'font-semibold', name: 'font-semibold' }} avatarProps={{ isBordered: true }} />
        </div>
      </div>
    </header>
  );
};

export default Header; 
