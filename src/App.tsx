import { addToast, Button } from "@heroui/react";
import { Link, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
