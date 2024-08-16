import React, { useEffect, useState } from "react";
import "../../Styles/Components/Navigation/Navigation.css";
import { Link } from "react-router-dom";
import CurrentDate from "../../Function/CurrentDate";
import Greeting from "../../Function/Greeting";

import { useDarkMode } from "../../Function/useDarkMode";
const Navigation = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  return (
    <>
      <nav className="Nav Top__Navigation">
        <h2 className="Title">{Greeting()}, User</h2>
        <div className="Action__Container">
          <CurrentDate />
          <button
            className="btn_outline"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
          <Link to="/setting" className="btn_outline">
            Setting
          </Link>
        </div>
      </nav>
      <section className="Nav Side__Navigation">
        <ul>
          <Link to="/">Dashboard</Link>
          <Link to="/budget">Budget Tracker</Link>
          <Link to="/scheduler">Meeting Scheduler</Link>
          <Link to="/pomodero">Pomodero</Link>
          <Link to="/todo">To-Do List</Link>
          <Link to="/calendar">Calendar</Link>
        </ul>
      </section>
    </>
  );
};

export default Navigation;
