import { addToast, Button } from "@heroui/react";
import { Link, Route, Routes, HashRouter as Router } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home/Home";
import { DayShow, DaysLists } from "./pages/day";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/days" element={<Layout />}>
          <Route index element={<DaysLists/>} />
          <Route path="/days/show/:id" element={<DayShow/>} />
        </Route>
        <Route path="/products" element={<Layout />}>
          <Route index element={<h1>Products</h1>} />
        </Route>
      </Routes></Router>
  );
};

export default App;
