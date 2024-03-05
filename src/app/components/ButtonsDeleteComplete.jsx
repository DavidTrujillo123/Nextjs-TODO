import { AiFillCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { useRouter } from "next/navigation";

const ButtonsDeleteComplete = ({completeTask, setCompleteTask, task, setDataAlert}) => {
  const router = useRouter();
  const updateTask = async (status) => {
    await fetch(`/api/tasks/${task.id}`, {
      method: "PUT",
      body: JSON.stringify({status: status}),
      headers: { "Content-Type": "application/json" },
    });
    router.refresh();
  };
  return (
    <div>
      <div
        className=" 
        flex
        justify-end
        w-auto 
        z-10"
      >
        <AiOutlineCheckCircle 
          className="w-7
          h-7  rounded-full
          bg-green-950
          hover:bg-green-400
          cursor-pointer mr-1"
          color="rgb(38 135 1)"
          onClick={()=>{
            updateTask(!completeTask)
            setCompleteTask(!completeTask)
          }}
        />

        <AiFillCloseCircle
          className="
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
              id: task.id,
            };
            setDataAlert(data);
          }}
        />
      </div>
    </div>
  );
}

export default ButtonsDeleteComplete;
