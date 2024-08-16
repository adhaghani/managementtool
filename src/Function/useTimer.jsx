import { useState, useEffect } from "react";

const useTimer = ({
  minutes,
  seconds,
  minutesBreak,
  secondsBreak,
  DisplayMessage,
  setDisplayMessage
}) => {
  const [startTimer, setStartTimer] = useState(false);
  const [timerMinutes, setTimerMinutes] = useState(minutes);
  const [timerSeconds, setTimerSeconds] = useState(seconds);
  const [isTimerZero, setIsTimerZero] = useState(false);
  useEffect(() => {
    setTimerMinutes(minutes);
    setTimerSeconds(seconds);
  }, [minutes, seconds]);

  useEffect(() => {
    const initialMinutes = minutes;
    const initialSeconds = seconds;
    const initialMinutesBreak = minutesBreak;
    const initialSecondsBreak = secondsBreak;
    if (initialMinutes === 0 && initialSeconds === 0) {
      setStartTimer(false);
      return setIsTimerZero(true);
    } else {
      setIsTimerZero(false);
    }
    if (startTimer) {
      let interval = setInterval(() => {
        if (timerSeconds === 0) {
          if (timerMinutes !== 0) {
            setTimerMinutes(timerMinutes - 1);
            setTimerSeconds(59);
          } else {
            let minutes = DisplayMessage ? initialMinutes : initialMinutesBreak;
            let seconds = DisplayMessage ? initialSeconds : initialSecondsBreak;

            setTimerMinutes(minutes);
            setTimerSeconds(seconds);

            setDisplayMessage(!DisplayMessage);
          }
        } else {
          setTimerSeconds(timerSeconds - 1);
        }
      }, 1000);

      return () => clearInterval(interval); // Clear the interval when the component unmounts
    }
  }, [
    startTimer,
    timerMinutes,
    timerSeconds,
    minutes,
    seconds,
    minutesBreak,
    secondsBreak
  ]);

  const formattedMinutes =
    timerMinutes < 10 ? "0" + timerMinutes : timerMinutes;
  const formattedSeconds =
    timerSeconds < 10 ? "0" + timerSeconds : timerSeconds;

  return {
    formattedMinutes,
    formattedSeconds,
    startTimer,
    setStartTimer,
    isTimerZero
  };
};

export default useTimer;
