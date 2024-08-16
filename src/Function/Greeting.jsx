import React from "react";

const Greeting = () => {
  const currentTime = new Date().getHours();
  const greeting = () => {
    if (currentTime < 10) {
      return "Good morning";
    } else if (currentTime < 12) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };

  return <span>{greeting()}</span>;
};

export default Greeting;
