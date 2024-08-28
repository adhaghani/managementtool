import React from "react";
import "../../Styles/Components/Ui/AddNew/AddNew.css";
import { motion } from "framer-motion";
import { CancelIcon } from "../../assets/svg/Icons";
export const AddNew = ({ children, className, enabled, setEnabled }) => {
  document.body.style.overflow = enabled ? "hidden" : "auto";

  return (
    <>
      {enabled && (
        <motion.div
          className={`AddNew ${className}`}
          initial={{ opacity: 0 }}
          animate={enabled ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.05 }}
          exit={enabled ? undefined : { opacity: 0 }}
        >
          <div className="AddNew__Container">
            <a as="button" className="Close" onClick={() => setEnabled(false)}>
              <CancelIcon />
            </a>
            <div className="Content__Container">{children}</div>
          </div>
        </motion.div>
      )}
    </>
  );
};
