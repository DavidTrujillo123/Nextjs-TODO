"use client";

import { useRouter } from "next/navigation";
import { AiFillCloseCircle } from "react-icons/ai";

function TasksComponent({ task, setDataAlert}) {
  const router = useRouter();
  return (
    <div className="relative">
      <AiFillCloseCircle
        className="absolute 
          top-[-12px] 
          right-[-12px]
          w-7
          h-7
          rounded-full
          bg-red-950
          hover:bg-red-400
          cursor-pointer
        "
        color="rgb(127 29 29)"
        onClick={() => {
          const data = {
            state: true,
            title: task.title,
            id: task.id
          }
          setDataAlert(data);
          // changeState(true);
          // changeMessage(task.title)
          // changeID(task.id);
        }}
      />

      <div
        className="bg-slate-600 p-5 
        hover:bg-slate-800 
          hover:cursor-pointer 
          min-h-44
        "
        onClick={() => {
          router.push(`/tasks/edit/${task.id}`);
        }}
      >
        <h3 className="font-bold text-2xl overflow-hidden">{task.title}</h3>
        <p>{task.description}</p>
        <p>{new Date(task.createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default TasksComponent;
