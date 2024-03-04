"use client";
import { useState } from "react";

import TasksComponent from "@/app/components/TasksComponent";
import AlertComponent from "@/app/components/AlertComponent";

function ListTasksComponent({ tasks }) {
  const [state, setState] = useState(false);
  const [message, setMessage] = useState(false);

  const changeStateByIcon = (state) => {
    setState(state);
  };

  const changeMessage = (message) => {
    setMessage(message);
  };

  return (
    <>
      <div className={state ? "bg-red-600 fixed top-0 z-10 flex justify-center items-center w-full" : "hidden"}>
        <AlertComponent
          message={`¿Esta seguro de eliminar "${message}"?`}
          state={state}
          onClose={changeStateByIcon}
        />
      </div>
      <div className="grid grid-cols-3 gap-5 p-5">
        {tasks.map((task) => (
          <TasksComponent
            task={task}
            key={task.id}
            changeState={changeStateByIcon}
            changeMessage={changeMessage}
          />
        ))}
      </div>
    </>
  );
}

export default ListTasksComponent;
