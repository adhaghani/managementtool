import React from "react";
import { Box } from "../../../Components/Ui/Box";
const PresetCardAudio = (props) => {
  return (
    <div onClick={props.onClick}>
      <Box className="Audio__Preset outline">
        <p className="Preset__Text">{props.type}</p>
      </Box>
    </div>
  );
};

export default PresetCardAudio;
