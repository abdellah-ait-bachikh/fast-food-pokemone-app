import { setAsideOpen } from "@/redux/slace/appSlice";
import { TinitialState } from "@/type/statesTypes";
import { Button } from "@heroui/react";
import { IoCloseOutline } from "react-icons/io5";
import { LuListMinus } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";

const AsideToogle = () => {
  const dispatch = useDispatch();
  const { isAsideOpen } = useSelector(
    (state: { app: TinitialState }) => state.app
  );
  return (
    <Button
      isIconOnly
      radius="lg"
      variant="light"
      // className="border-3 dark:border-slate-600   gap-3 bg-amber-500/60 dark:bg-slate-950 "
      onPress={() => {
        dispatch(setAsideOpen(!isAsideOpen));
      }}
    >
      {isAsideOpen ? <IoCloseOutline size={22} /> : <img src="/images/poke_close.png" />}
    </Button>
  );
};

export default AsideToogle;
