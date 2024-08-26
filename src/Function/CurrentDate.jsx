import React from "react";

const CurrentDate = () => {
  const date = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  };

  const formattedDate = date.toLocaleDateString("en-US", options);
  return <span>{formattedDate}</span>;
};

export default CurrentDate;
