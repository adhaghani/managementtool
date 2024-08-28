import React, { useEffect, useState } from "react";
import "../../Styles/Components/Navigation/Navigation.css";
import { Link } from "react-router-dom";
import CurrentDate from "../../Function/CurrentDate";
import Greeting from "../../Function/Greeting";

import { useDarkMode } from "../../Function/useDarkMode";
import { DarkModeIcon, LightModeIcon } from "../../assets/svg/Icons";

import {
  PomodoroIcon,
  TodoListIcon,
  CalendarIcon,
  BudgetTrackerIcon,
  MeetingSchedulerIcon,
  DashboardIcon,
  SettingsIcon
} from "../../assets/svg/NavigationIcons";
import BudgetTracker from "../../Pages/BudgetTracking/BudgetTracker";
const Navigation = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  return (
    <>
      <section className="Nav Side__Navigation">
        <ul>
          <h3>ManageTool</h3>
          <Link to="/">
            <DashboardIcon /> Dashboard
          </Link>
          <Link to="/budget">
            <BudgetTrackerIcon /> Budget Tracker
          </Link>
          <Link to="/scheduler">
            <MeetingSchedulerIcon /> Meeting Scheduler
          </Link>
          <Link to="/pomodero">
            <PomodoroIcon /> Pomodero
          </Link>
          <Link to="/todo">
            <TodoListIcon /> To-Do List
          </Link>
          <Link to="/calendar">
            <CalendarIcon /> Calendar
          </Link>
          <Link to="/setting">
            <SettingsIcon /> Settings
          </Link>
        </ul>
        <section className="Action__Section">
          {" "}
          <span>Today is</span>
          <p>{CurrentDate()}</p>
          <button
            className="btn_outline Full md"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? (
              <>
                <LightModeIcon />
                Light Mode
              </>
            ) : (
              <>
                <DarkModeIcon />
                Dark Mode
              </>
            )}
          </button>
        </section>
      </section>
    </>
  );
};

export default Navigation;
