import React from "react";
import "../../Styles/Components/Ui/AddNew/AddNew.css";
import { motion } from "framer-motion";
import DeleteIcon from "../../assets/svg/DeleteIcon";
export const AddNew = ({ children, className, enabled, setEnabled }) => {
  document.body.style.overflow = enabled ? "hidden" : "auto";

  return (
    <>
      {enabled && (
        <motion.div
          className={`AddNew ${className}`}
          initial={{ opacity: 0 }}
          animate={enabled ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.1 }}
          exit={enabled ? undefined : { opacity: 0 }}
        >
          <div className="AddNew__Container">
            <a as="button" className="Close" onClick={() => setEnabled(false)}>
              <DeleteIcon />
            </a>
            <div className="Content__Container">{children}</div>
          </div>
        </motion.div>
      )}
    </>
  );
};
