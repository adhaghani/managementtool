import React, { useState } from "react";
import { DeleteIcon } from "../../../assets/svg/Icons";

const TaskCard = () => {
  const [isDone, setIsDone] = useState(true);
  const [TaskBy, setTaskBy] = useState(null);

  return (
    <div className="Task__Card">
      <div className="Task__Title">
        <h3>Task Title</h3>
        {isDone && (
          <button className="Delete__Task">
            <DeleteIcon />
          </button>
        )}
      </div>
      <div className="Task__Date">
        <p>Due By : 01/01/2022</p>
      </div>
      {TaskBy && (
        <div className="Task__By">
          <p>Task By : user</p>
        </div>
      )}
      <div className="Task__Details">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
          labore?
        </p>
        {/* <ul className="Details__List">
          <li>Do This</li>
          <li>Do That</li>
          <li>Dont' Forget to implement this</li>
        </ul> */}
      </div>
    </div>
  );
};

export default TaskCard;
