import React from "react";
import { Routes, Route } from "react-router-dom";
// import DashboardHome from "./DashboardHome";
import ProductsList from "../Products/ProductsList";
// import Settings from "./Settings";
import NotFound from "../../components/NotFound"; // Optional: Handle 404 errors

const DashboardRouter = () => {
  return (
    <Routes>
      <Route path="/dashboard/*" component={<NotFound />} />
    </Routes>
  );
};

export default DashboardRouter;
