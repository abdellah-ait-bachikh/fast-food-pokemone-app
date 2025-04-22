import { links } from "@/lib/const";
import { setAsideOpen } from "@/redux/slace/appSlice";
import { TinitialState } from "@/type/statesTypes";
import classNames from "classnames";
import React, { useEffect } from "react";
import { CiLogout } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import AsideToogle from "../ui/AsideToogle";

const Aside = () => {
  const dispatch = useDispatch();
  const { isAsideOpen } = useSelector(
    (state: { app: TinitialState }) => state.app
  );

  return (
    <div
      className={classNames(
        "fixed md:sticky top-0 left-0   h-screen overflow-hidden overflow-y-auto transition-width backdrop-blur-md   bg-amber-500/60 dark:bg-slate-900 z-[999]",
        {
          "w-full md:w-[220px]": isAsideOpen,
          "w-0 md:w-[72px]": !isAsideOpen,
        }
      )}
    >
      <div className="w-full h-full flex flex-col items-center p-4 relative">
        <div className="w-full">
          <img className="w-full" src="/images/poke_logo.png"/></div>{" "}
        <div className="md:hidden absolute top-3 right-3">
          <AsideToogle />
        </div>
        <div className="w-full flex-grow flex flex-col gap-2 mt-7">
          {links.map((e) => (
            <div key={e.name} className="w-full ">
              <NavLink
                to={e.href}
                className={classNames(
                  "flex items-center overflow-hidden border-3 dark:border-slate-600   gap-3 bg-gray-200 dark:bg-slate-950 rounded-xl transition-width  h-[47px] p-[11px]",
                  {
                    "w-[47px] justify-start": !isAsideOpen,
                    "w-full ": isAsideOpen,
                  }
                )}
              >
                <span className={classNames("text-xl ")}>
                  {React.createElement(e.icon)}
                </span>
                <span
                  className={classNames(
                    "font-semibold text-[17px] tracking-widest "
                  )}
                >
                  {e.name}
                </span>
              </NavLink>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col gap-3 mt-6">
          <div className="w-full ">
            <NavLink
              to="/settings"
              className={classNames(
                "flex items-center overflow-hidden border-3 dark:border-slate-600   gap-3 bg-gray-200 dark:bg-slate-950 rounded-xl transition-width  h-[47px] p-[11px]",
                {
                  "w-[47px] justify-start": !isAsideOpen,
                  "w-full ": isAsideOpen,
                }
              )}
            >
              <span className={classNames("text-xl ")}>
                {React.createElement(IoMdSettings)}
              </span>
              <span
                className={classNames(
                  "font-semibold text-[17px] tracking-widest "
                )}
              >
                Settings
              </span>
            </NavLink>
          </div>
          <div className="w-full ">
            <button
              className={classNames(
                "flex items-center overflow-hidden border-3 dark:border-slate-600   gap-3 bg-danger-400/60 dark:bg-danger-950 rounded-xl transition-width  h-[47px] p-[11px]",
                {
                  "w-[47px] justify-start": !isAsideOpen,
                  "w-full ": isAsideOpen,
                }
              )}
            >
              <span className={classNames("text-xl ")}>
                {React.createElement(CiLogout)}
              </span>
              <span
                className={classNames(
                  "font-semibold text-[17px] tracking-widest "
                )}
              >
                Logout
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aside;
