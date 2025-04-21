import { links } from "@/lib/const";
import { setAsideOpen } from "@/redux/slace/appSlice";
import { TinitialState } from "@/type/statesTypes";
import classNames from "classnames";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Aside = () => {
  const dispatch = useDispatch();
  const { isAsideOpen } = useSelector(
    (state: { app: TinitialState }) => state.app
  );
  useEffect(() => {
    dispatch(setAsideOpen(true));
  }, []);
  return (
    <div
      className={classNames(
        "sticky top-0 left-0   h-screen overflow-hidden overflow-y-auto transition-width   bg-white dark:bg-slate-900 ",
        {
          "w-[220px]": isAsideOpen,
          "w-[72px]": !isAsideOpen,
        }
      )}
    >
      <div className="w-full h-full flex flex-col items-center p-4">
        <div>logo</div>
        <div className="w-full flex flex-col gap-2 mt-16">
          {links.map((e) => (
            <div key={e.name} className="w-full ">
              <Link
                to={e.href}
                className={classNames(
                  "flex items-center overflow-hidden border-3 border-  gap-3 bg-amber-500/60 rounded-xl transition-width  h-[42px] p-[11px]",
                  {
                    "w-[42px] justify-start": !isAsideOpen,
                    "w-full ": isAsideOpen,
                  }
                )}
              >
                <span className={classNames("text-xl my-auto")}>
                  {React.createElement(e.icon)}
                </span>
                <span
                  className={classNames(
                    "font-semibold text-[17px] tracking-widest my-auto",
                    {
                      // hidden: !isAsideOpen,
                    }
                  )}
                >
                  {e.name}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aside;
