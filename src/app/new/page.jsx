"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function NewTask({ params }) {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  let eventSubmit = () => {};

  if (params.id) {
    useEffect(() => {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }, []);

    eventSubmit = async () => {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: { "Content-Type": "application/json" },
      });
      return res;
    };
  } else {
    eventSubmit = async () => {
      const res = await fetch("/api/tasks/", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: { "Content-Type": "application/json" },
      });
      return res;
    };
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await eventSubmit();
   
    const data = await res.json();
    console.log(data);

    router.push("/");
    router.refresh();
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        className="bg-slate-800 p-10 lg:w-1/4 w-[350px] rounded-md"
        onSubmit={onSubmit}
      >
        <label htmlFor="title" className="font-bold text-sm">
          Título de tarea
        </label>
        <input
          id="title"
          type="text"
          className="border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Título"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />

        <label htmlFor="title" className="font-bold text-sm">
          Descripción
        </label>
        <textarea
          id="description"
          rows="3"
          className="border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Describe tu tarea"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        />

        <button className="bg-red-950 py-3 px-4 rounded hover:bg-red-800 font-bold">
          Crear
        </button>
      </form>
    </div>
  );
}

export default NewTask;
