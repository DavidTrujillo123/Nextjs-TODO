"use client";
import { useState } from "react";

import TasksComponent from "@/app/components/TasksComponent";
import AlertComponent from "@/app/components/AlertComponent";

function ListTasksComponent({ tasks }) {
  const [state, setState] = useState(false);
  const [title, setTitle] = useState(false);
  const [id, setID] = useState();

  const setDataAlert = (data) => {
    setState(data.state);
    setTitle(data.title);
    setID(data.id);
  };

  return (
    <div className="">
      {state && (
        <div className="flex justify-center items-center">
          <AlertComponent
            message={`¿Está seguro de eliminar "${title}"?`}
            state={state}
            id={id}
            onClose={() => {
              setState(false);
            }}
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-4">
        {tasks.map((task, i) => (
          <TasksComponent
            task={task}
            key={task.id}
            id={i}
            setDataAlert={setDataAlert}
          />
        ))}
      </div>
    </div>
  );
}

export default ListTasksComponent;
