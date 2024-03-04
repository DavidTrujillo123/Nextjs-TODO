import { prisma } from "@/libs/prisma";
import ListTasksComponent from "./components/ListTaskComponent";

async function loadTasks() {
  return await prisma.task.findMany();
}

async function HomePage() {
  const tasks = await loadTasks();
  
  return (
    <section className="container mx-auto">
      <ListTasksComponent tasks={tasks}/>
    </section>
  );
}

export default HomePage;
