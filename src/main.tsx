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
      className="w-full min-h-screen bg-gray-100 dark:bg-slate-900 flex"
    >
      <Provider store={store}>
        <App />
        <ToastProvider placement="top-center" toastProps={{ timeout: 5000 }} />
      </Provider>
    </HeroUIProvider>
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
