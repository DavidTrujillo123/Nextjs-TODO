"use client";

import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import ButtonsDeleteComplete from "./ButtonsDeleteComplete";

function TasksComponent({ task, setDataAlert, id }) {
  const router = useRouter();

  const [completeTask, setCompleteTask] = useState(task.status);

  return (
    <div className={`${
      task.description.length >= 600 ? `md:row-span-3 md:col-span-3` 
      : task.description.length < 400 && task.description.length > 300 ? `md:row-span-2 md:col-span-2 b` 
        : `md:col-span-1 row-span-1`}`}>
  
    <div
        className={`
          h-full
          p-3 
          hover:cursor-pointer
          rounded-[16px]
          ${
            completeTask
              ? "bg-amber-900 line-through"
              : "bg-slate-900 hover:bg-slate-800"
          }`}
      >
        <div className="flex justify-between">
          <h3 className="font-bold text-2xl overflow-y-auto">{task.title}</h3>
          <ButtonsDeleteComplete
            completeTask={completeTask}
            setCompleteTask={setCompleteTask}
            setDataAlert={setDataAlert}
            task={task}
          />
        </div>
        <div
          onClick={() => {
            router.push(`/tasks/edit/${task.id}`);
          }}
        >
          <p className="overflow-y-auto">{task.description}</p>
          <div className="relative bottom-0 flex justify-between w-full mt-2 p-2">
            <p className="">{new Date(task.createdAt).toLocaleDateString()}</p>
            <p className="relative right-10">
              {task.status ? "Completado" : "Pendiente"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TasksComponent;
