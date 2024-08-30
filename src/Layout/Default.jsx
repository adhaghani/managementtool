import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Components/Navigation/Navigation";
import { useStateContext } from "../Function/ContextProvider";
import { motion } from "framer-motion";
const Default = () => {
  const { IsFullScreen } = useStateContext();
  return (
    <div>
      <Navigation />
      <motion.main
        className={"Main__Container"}
        initial={{
          paddingLeft: "calc(var(--side_nav-width) + var(--padding_l))"
        }}
        animate={
          IsFullScreen
            ? { paddingLeft: "var(--padding_l)" }
            : { paddingLeft: "calc(var(--side_nav-width) + var(--padding_l))" }
        }
        transition={{ duration: 0.25 }}
      >
        <Outlet />
      </motion.main>
    </div>
  );
};

export default Default;
