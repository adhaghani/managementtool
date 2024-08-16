import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Components/Navigation/Navigation";

const Default = () => {
  return (
    <div>
      <Navigation />
      <main className="Main__Container P-Top P-Left">
        <Outlet />
      </main>
    </div>
  );
};

export default Default;
