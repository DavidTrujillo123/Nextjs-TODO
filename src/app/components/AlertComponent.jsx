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
    <>
      {state && (
        <div className="fixed z-10 top-2/4">
          
          <div className="backdrop-blur-sm p-5 rounded-md mt-2 border">
            <h1 className="text-white font-bold">{message}</h1>
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
      )}
    </>
  );
};

export default AlertComponent;
