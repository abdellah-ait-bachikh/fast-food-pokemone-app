import ThemeToggle from "../ui/ThemeToggle";
import AsideToogle from "../ui/AsideToogle";
import { Avatar, User } from "@heroui/react";

const Header = () => {
  return (
    <header className="p-3 bg-amber-500/60 dark:bg-slate-900/60 backdrop-blur-md  z-[998] sticky top-0">
      <div className="w-full flex items-center justify-between">
        <AsideToogle />
        <div className="flex items-center gap-2 ">
          <ThemeToggle />
          <User name="mohamed chaha" description="@Admin" classNames={{base:'flex-row-reverse',wrapper:'items-end',description:'font-semibold',name:'font-semibold'}} avatarProps={{isBordered:true}} />
        </div>
      </div>
    </header>
  );
};

export default Header;
