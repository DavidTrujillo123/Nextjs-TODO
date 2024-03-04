"use client";

import { useRouter } from "next/navigation";

const AlertComponent = ({ state, id, message, onClose }) => {
  const router = useRouter();

  const deleteTask = async () => {
    await fetch(`/api/tasks/${id}`, {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" },
    });
    router.refresh();
    onClose();
  };

  return (
    <div
      className={
        state
          ? "fixed top-0 z-10 flex justify-center items-center w-full h-screen"
          : "hidden"
      }
    >
    
      <div className="backdrop-blur-sm p-5 rounded-md mt-2 border">
        <h1 className="text-red-700 font-bold">{message}</h1>
        <div className="flex justify-center items-center mt-2">
          <button 
            className="bg-green-600 p-1 mt-1 mr-6 rounded-md"
            onClick={() => {
              deleteTask();
            }}
          >
            Aceptar
          </button>

          <button 
            onClick={onClose}
            className="bg-red-700 p-1 mt-1 rounded-md"
          >
              Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertComponent;
