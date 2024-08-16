import React from "react";
import "../../Styles/Components/Ui/Box/Box.css";
import { motion } from "framer-motion";

export const Box = ({ children, className = "" }) => {
  return <motion.div className={`Box ${className}`}>{children}</motion.div>;
};
