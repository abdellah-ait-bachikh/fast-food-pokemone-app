import ThemeToggle from "../ui/ThemeToggle";
import AsideToogle from "../ui/AsideToogle";

const Header = () => {

  return (
    <header className="p-3 bg-amber-500/60 dark:bg-slate-900/60 backdrop-blur-md  z-[998] sticky top-0">
      <div className="w-full flex items-center justify-between">
      <AsideToogle/>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
