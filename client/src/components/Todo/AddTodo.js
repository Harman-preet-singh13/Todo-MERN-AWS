import { useState } from "react";
import axios from "axios";

export default function AddTodo({ userId }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAddTask = async () => {
    try {
      const response = await axios.post("http://localhost:8080/tasks/addTask", {
        userId,
        title,
        description,
        dueDate,
      });

      console.log("Task added:", response.data);
      // You can handle the response or perform any other necessary actions
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };
  return (
    <div className="max-w-[1024px] mx-auto">
      <form className={`mx-4`}>
        <input
          text="text"
          className={` shadow appearance-none border-2 focus:border-[#949191] rounded w-full py-2 px-3 text-gray-700 bg-[#E1DEDE] leading-tight focus:outline-none  
              }`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
          required
        />
        <textarea
          text="text"
          className={` shadow appearance-none border-2 focus:border-[#949191] rounded w-full py-2 px-3 text-gray-700 bg-[#E1DEDE] leading-tight focus:outline-none
              }`}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description"
        />
        <label className="font-semibold">
            Due Date:
        </label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <div className=" my-2 flex text-center justify-center">
          <button
            className=" my-1 px-2 py-1 font-semibold text-zinc-800 border border-zinc-500  rounded hover:bg-green-300"
            onClick={handleAddTask}
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}
