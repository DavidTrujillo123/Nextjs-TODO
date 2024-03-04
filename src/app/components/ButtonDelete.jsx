"use client"
import { AiFillCloseCircle } from "react-icons/ai";

const ButtonDelete = (changeState, changeMessage) => {
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
          changeState(true);
          // changeMessage(task.title);
        }}
      />
    </div>
  );
};

export default ButtonDelete;
