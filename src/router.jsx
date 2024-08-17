import { createBrowserRouter } from "react-router-dom";
import React from "react";

import Default from "./Layout/Default";

import BudgetTracker from "./Pages/BudgetTracking/BudgetTracker";
import Calendar from "./Pages/Calendar/Calendar";
import Scheduler from "./Pages/Scheduler/Scheduler";
import Pomodero from "./Pages/Pomodero/Pomodero";
import TodoList from "./Pages/TodoList/TodoList";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Setting from "./Pages/Setting/Setting";

const routes = [
  {
    path: "/",
    element: <Default />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/budget", element: <BudgetTracker /> },
      { path: "/calendar", element: <Calendar /> },
      { path: "/scheduler", element: <Scheduler /> },
      { path: "/pomodero", element: <Pomodero /> },
      { path: "/todo", element: <TodoList /> },
      { path: "/setting", element: <Setting /> }
    ]
  }
];

export const router = createBrowserRouter(routes, {
  basename: "/managementtool"
});
