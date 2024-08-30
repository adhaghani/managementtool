import React, { useEffect, useState } from "react";
import { Box } from "../../Components/Ui/Box";
import "../../Styles/Pages/Pomodero/Pomodero.css";
import Preset from "./Components/PresetCard";
import PresetCardAudio from "./Components/PresetCardAudio";
import useTimer from "../../Function/useTimer";

import { motion } from "framer-motion";

import { GoFullScreenIcon, ExitFullScreenIcon } from "../../assets/svg/Icons";
import { useStateContext } from "../../Function/ContextProvider";
const Pomodero = () => {
  const [DisplayMessage, setDisplayMessage] = useState(false);

  const [minutes, setMinutes] = useState(20);
  const [seconds, setSeconds] = useState(0);

  const [minutesBreak, setminutesBreak] = useState(5);
  const [secondsBreak, setsecondsBreak] = useState(0);

  const [UseAudio, setUseAudio] = useState(0);
  const [AudioOption, setAudioOption] = useState(null);

  const { IsFullScreen, setIsFullScreen } = useStateContext();
  const {
    formattedMinutes,
    formattedSeconds,
    startTimer,
    setStartTimer,
    isTimerZero
  } = useTimer({
    minutes,
    seconds,
    minutesBreak,
    secondsBreak,
    DisplayMessage,
    setDisplayMessage
  });

  const handleFullScreen = () => {
    setIsFullScreen(!IsFullScreen);
  };

  const handleUpdateTimer = (type, newMinutes, newSeconds) => {
    if (type === "work") {
      setMinutes(newMinutes);
      setSeconds(newSeconds);

      console.log("update Work");
    } else if (type === "break") {
      setminutesBreak(newMinutes);
      setsecondsBreak(newSeconds);

      console.log("update break");
    }
  };

  const handleReset = () => {
    setDisplayMessage(false);
    setStartTimer(false);
    setMinutes(0);
    setSeconds(0);
    setminutesBreak(0);
    setsecondsBreak(0);
  };

  const presets = [
    { minutes: 10, seconds: 0, type: "work" },
    { minutes: 20, seconds: 0, type: "work" },
    { minutes: 30, seconds: 0, type: "work" },
    { minutes: 40, seconds: 0, type: "work" },
    { minutes: 50, seconds: 0, type: "work" },
    { minutes: 60, seconds: 0, type: "work" },
    { minutes: 5, seconds: 0, type: "break" },
    { minutes: 10, seconds: 0, type: "break" },
    { minutes: 15, seconds: 0, type: "break" },
    { minutes: 20, seconds: 0, type: "break" }
  ];

  const formattedMinuteBreak =
    minutesBreak < 10 ? `0${minutesBreak}` : minutesBreak;
  const formattedSecondsBreak =
    secondsBreak < 10 ? `0${secondsBreak}` : secondsBreak;

  return (
    <div className="Pomodoro">
      <motion.div
        className="Timer__Section outline padding"
        initial={{ width: "60%" }}
        animate={{ width: startTimer ? "100%" : "60%" }}
        exit={{ width: startTimer ? "60%" : "0%" }}
        transition={{ duration: 0.25 }}
      >
        <div className="Time__Container">
          <div className="break">
            {DisplayMessage && <h2>Time to take a break.</h2>}
          </div>
          <div className="Timer">
            <h2 className="TimerMinutes">
              <span>{formattedMinutes}</span>
            </h2>
            <h2>:</h2>
            <h2 className="TimerSeconds">
              <span>{formattedSeconds}</span>
            </h2>
          </div>
          <div className="Button__Container">
            <button
              className="btn_outline"
              onClick={() => setStartTimer(!startTimer)}
            >
              {startTimer ? "Stop" : "Start"}
            </button>
            <button className="btn_outline" onClick={handleReset}>
              Reset
            </button>
          </div>
          <div className="FullScreen__Toggle">
            <button
              className="Toggle__Button btn_outline"
              onClick={handleFullScreen}
            >
              {IsFullScreen ? <ExitFullScreenIcon /> : <GoFullScreenIcon />}
              Toggle Full Screen
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="Input__Section "
        initial={{ width: "40%" }}
        animate={{
          opacity: startTimer ? 0 : 1,
          width: startTimer ? "0%" : "40%",

          transition: { duration: 0.1 },
          display: startTimer ? "none" : "flex"
        }}
        exit={{ width: startTimer ? "40%" : "0%" }}
      >
        {!startTimer && (
          <>
            <div className="section">
              <Box className="Work__Section padding">
                <h2 className="Title">Focusing Time</h2>
                <div className="Preset__Container">
                  {presets
                    .filter((preset) => preset.type === "work")
                    .map((preset) => (
                      <Preset
                        key={preset.minutes}
                        minutes={preset.minutes}
                        seconds={preset.seconds}
                        updatesFunction={() =>
                          handleUpdateTimer(
                            "work",
                            preset.minutes,
                            preset.seconds
                          )
                        }
                      />
                    ))}
                </div>
              </Box>
              <Box className="Break__Section padding">
                <h2 className="Title">Relaxing Time</h2>
                <div className="Preset__Container">
                  {presets
                    .filter((preset) => preset.type === "break")
                    .map((preset) => (
                      <Preset
                        key={preset.minutes}
                        minutes={preset.minutes}
                        seconds={preset.seconds}
                        updatesFunction={() =>
                          handleUpdateTimer(
                            "break",
                            preset.minutes,
                            preset.seconds
                          )
                        }
                      />
                    ))}
                </div>
              </Box>
            </div>
            <div className="section current">
              <p>
                Current{" "}
                {isTimerZero && <span className="red">Please select time</span>}
              </p>
              <div className="border-bt">
                <p>Focusing Time</p>
                <h1>
                  {formattedMinutes} : {formattedSeconds}
                </h1>
              </div>
              <div>
                <p>Relaxing Time</p>
                <h1>
                  {formattedMinuteBreak} : {formattedSecondsBreak}
                </h1>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Pomodero;
