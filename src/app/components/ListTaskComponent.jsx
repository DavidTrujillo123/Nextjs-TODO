"use client";
import { useState } from "react";

import TasksComponent from "@/app/components/TasksComponent";
import AlertComponent from "@/app/components/AlertComponent";

function ListTasksComponent({ tasks }) {
  const [state, setState] = useState(false);
  const [title, setTitle] = useState(false);
  const [id, setID] = useState();


  const setDataAlert = (data) =>{
    setState(data.state);
    setTitle(data.title);
    setID(data.id);
  }

  return (
    <>
      <div className={state ? "bg-red-600 fixed top-0 z-10 flex justify-center items-center w-full" : "hidden"}>
        <AlertComponent
          message={`¿Está seguro de eliminar "${title}"?`}
          state={state}
          id={id}
          onClose={()=>{setState(false)}}
        />
      </div>
      <div className="grid grid-cols-3 gap-5 p-5">
        {tasks.map((task) => (
          <TasksComponent
            task={task}
            key={task.id}
            setDataAlert={setDataAlert}
          />
        ))}
      </div>
    </>
  );
}

export default ListTasksComponent;
