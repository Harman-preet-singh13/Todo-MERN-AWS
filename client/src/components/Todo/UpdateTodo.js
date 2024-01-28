import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";

export default function UpdateTodo({
  taskId,
  taskTitle,
  taskDescription,
  taskDueDate,
  userId,
}) {

    const [showModal, setShowModal] = useState(false);
    const [UpdateTitle, setUpdateTitle] = useState('')
    const [UpdateDescription, setUpdateDescription4] = useState('')

    const handleDelete = async (taskId) => {
        try {
            
            await axios.delete(`http://localhost:8080/tasks/deleteTask/${taskId}`)
        } catch (error){
            console.log("Error deleting task", error);
        }
    };

  return (
    <div className="pl-8 flex gap-2">
      <button className="mt-1 px-2 py-1 font-semibold text-zinc-800 border border-zinc-500 rounded hover:bg-blue-300 "
      
      >
        <FaEdit />
      </button>
      <button
        className="mt-1 px-2 py-1 font-semibold text-zinc-800 border border-zinc-500 rounded hover:bg-red-300 "
        onClick={()=>handleDelete(taskId)}
      >
        <MdDelete />
      </button>
    </div>
  );
}
