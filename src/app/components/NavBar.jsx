import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex p-4">
      <Link href={"/"} className="mr-4">
        Tareas
      </Link>
      <br />
      <Link href={"/new"}>Nueva tarea</Link>
    </div>
  );
};

export default NavBar;
