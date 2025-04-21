import { setAsideOpen } from "@/redux/slace/appSlice";
import { TinitialState } from "@/type/statesTypes";
import { Button } from "@heroui/react";
import { useDispatch, useSelector } from "react-redux";
import { LuListMinus } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";

const Header = () => {
  const dispatch = useDispatch();
  const { isAsideOpen } = useSelector(
    (state: { app: TinitialState }) => state.app
  );
  return (
    <header className="p-3 bg-white dark:bg-slate-900 ">
      <div className="w-full flex items-center justify-between">
        <Button
          isIconOnly
          radius="lg"
          variant="flat"
          className="border-3 dark:border-slate-600   gap-3 bg-amber-500/60 dark:bg-slate-950 "
          onPress={() => {
            dispatch(setAsideOpen(!isAsideOpen));
          }}
        >
          {isAsideOpen ? (
            <IoCloseOutline size={21} />
          ) : (
            <LuListMinus size={21} />
          )}
        </Button>
        <div>avatar</div>
      </div>
    </header>
  );
};

export default Header;
