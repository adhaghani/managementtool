import React, { useState } from "react";
import { Box } from "../../Components/Ui/Box";
import "../../Styles/Pages/TodoList/TodoList.css";
import TaskCard from "./Components/TaskCard";
const TodoList = () => {
  return (
    <div className="TodoList">
      <div className="Top__Section">
        <h2 className="Title">Todo List</h2>
        <button className="btn_primary">Add new Task</button>
      </div>
      <Box className="Task__Box padding">
        <div>
          <h2 className="Title">Task</h2>
          <Box className="Droppable__Area">
            <TaskCard />
            <TaskCard />
          </Box>
        </div>
        <div>
          <h2 className="Title">To-Do</h2>
          <Box className="Droppable__Area">
            <TaskCard />
            <TaskCard />
          </Box>
        </div>
        <div>
          <h2 className="Title">In Progress</h2>
          <Box className="Droppable__Area">
            <TaskCard />
            <TaskCard />
          </Box>
        </div>
        <div>
          <h2 className="Title">Completed</h2>
          <Box className="Droppable__Area">
            <TaskCard />
            <TaskCard />
          </Box>
        </div>
      </Box>
    </div>
  );
};

export default TodoList;
