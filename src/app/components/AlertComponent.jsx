"use client";

import { useState } from "react";

const AlertComponent = ({ state, message, onClose}) => {
  return (
    <div className={
        state ? "bg-red-600 fixed top-0 z-10 flex justify-center items-center w-full" 
          : "hidden"} 
    >
      <h1>{message}</h1>
      <div>

        <button
          onClick={() => {
            
          }}
        >
          Aceptar
        </button>

        <button
          onClick={() => {
            onClose(false);
          }}
        >
          Cancelar
        </button>
      </div>
      </div>
  );
};

export default AlertComponent;
