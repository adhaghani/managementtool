import React, { useState } from "react";

import "../../Styles/Pages/BudgetTracker/BudgetTracker.css";
import { Box } from "../../Components/Ui/Box";
const BudgetTracker = () => {
  const [CategoryPage, setCategoryPage] = useState(1);
  return (
    <div className="BudgetTracker">
      <div className="Top__Section">
        <h2 className="Title">Budget Tracker</h2>
        <select
          name=""
          id=""
          className="Input"
          value={CategoryPage}
          onChange={(e) => setCategoryPage(e.target.value)}
        >
          <option value={1}>Bill splitter</option>
          <option value={2}>Loan Calculator</option>
          <option value={3}>Budget Management</option>
        </select>
      </div>
      <Box className="budgetContent outline padding">
        <>
          <>
            {CategoryPage == 1 ? (
              <div className="BillS1plitter">Bill Splitter</div>
            ) : CategoryPage == 2 ? (
              <div className="loanCalculator">loan Calculator</div>
            ) : (
              <div className="BudgetManagement">budget Management</div>
            )}
          </>
        </>
      </Box>
    </div>
  );
};

export default BudgetTracker;
