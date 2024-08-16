import React from "react";
import { Box } from "../../../Components/Ui/Box";
const Preset = ({ minutes, seconds, updatesFunction }) => {
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  const handleUpdate = (e) => {
    updatesFunction();
  };

  return (
    <div onClick={handleUpdate}>
      <Box className="Timer__Preset outline padding">
        <h3>
          {formattedMinutes}:{formattedSeconds}
        </h3>
      </Box>
    </div>
  );
};

export default Preset;
