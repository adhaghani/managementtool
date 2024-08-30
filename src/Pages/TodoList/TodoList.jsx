import React, { useState } from "react";
import { Box } from "../../Components/Ui/Box";
import "../../Styles/Pages/TodoList/TodoList.css";
import TaskCard from "./Components/TaskCard";
import { AddNew } from "../../Components/Ui/AddNew";
import AddTaskComponent from "./Components/AddTaskComponent";
import { AddIcon } from "../../assets/svg/Icons";
const TodoList = () => {
  const [AddNewTask, setAddNewTask] = useState(false);
  return (
    <div className="TodoList">
      <div className="Top__Section">
        <h2 className="Title">Todo List</h2>
        <button className="btn_outline" onClick={() => setAddNewTask(true)}>
          <AddIcon /> Add new Task
        </button>
      </div>
      <Box className="Task__Box">
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
      <AddNew
        className={"Todo"}
        enabled={AddNewTask}
        setEnabled={setAddNewTask}
      >
        <AddTaskComponent />
      </AddNew>
    </div>
  );
};

export default TodoList;
