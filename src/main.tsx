import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./demos/ipc";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HeroUIProvider
      locale="fr-FR"
      className="w-full min-h-screen overflow-clip bg-white dark:bg-slate-900  flex justify-start items-start z-[999] "
    >
      <Provider store={store} >
        <App />
        <div className="z-[9999]"> <ToastProvider placement="top-right" toastProps={{ timeout: 5000, classNames: { base: 'z-[9999]' } }} />
        </div>
      </Provider>
    </HeroUIProvider>
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
