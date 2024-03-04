import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const tasks = await prisma.task.findMany();
  return NextResponse.json(tasks);
}

export async function POST(request) {
  //Obtiene los datos que son enviados
  //const data = await request.json();

  //Alternativa
  const { title, description } = await request.json();

  //Guarda en la base de datos
  const newTask = await prisma.task.create({
    // data:{
    //   title: data.title,
    //   description: data.description
    // }
    data: {
      title,
      description,
    },
  });
  return NextResponse.json(newTask);
}
