import { setAsideOpen } from "@/redux/slace/appSlice";
import { TinitialState } from "@/type/statesTypes";
import { Button } from "@heroui/react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const { isAsideOpen } = useSelector(
    (state: { app: TinitialState }) => state.app
  );
  return (
    <div>
      <Button
        onPress={() => {
          dispatch(setAsideOpen(!isAsideOpen));
        }}
      >
        {isAsideOpen ? "close" : "open"}
      </Button>
    </div>
  );
};

export default Header;
