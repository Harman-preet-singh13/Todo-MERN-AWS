import React, { useState, useEffect } from "react";
import axios from "axios";
import UpdateTodo from "./UpdateTodo";

export default function TodoList({ userId }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/tasks/getUserTasks/${userId}`
        );
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [userId]);


  return (
    <div className="max-w-[1024px] mx-auto">
      <div className="p-4">
        <h2 className="text-2xl font-semibold">All Tasks</h2>
        <ul className="mt-5 mx-2">
          {tasks.map((task) => (
            <li key={task.taskId} className="border-b  px-5 py-5">
              <h3 className="font-semibold text-lg">{task.title}</h3>
              <div className="flex justify-between">
                <p className="pl-8 ">{task.description}</p>
                <p className="pl-8">
                  <span className="font-semibold">Due Date:</span>
                  {task.dueDate}
                </p>
              </div>
              <UpdateTodo userId={userId} taskId={task.taskId} taskTitle={task.title} taskDescription={task.description} taskDueDate={task.dueDate}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
