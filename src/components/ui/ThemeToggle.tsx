import { setTheme } from "@/redux/slace/appSlice";
import { TinitialState } from "@/type/statesTypes";
import { Button } from "@heroui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: { app: TinitialState }) => state.app);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    console.log(theme);
  }, [theme]);
  return (
    <Button
      isIconOnly
      variant="light"
      radius="lg"
      onPress={() => {
        dispatch(setTheme(theme === "light" ? "dark" : "light"));
      }}
      className="text-2xl"
    >
      {theme === "dark" ? <IoSunnyOutline /> : <FaRegMoon />}
    </Button>
  );
};

export default ThemeToggle;
