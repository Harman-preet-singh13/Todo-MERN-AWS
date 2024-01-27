import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function TodoList({userId}) {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
     
      const fetchTasks = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/tasks/getUserTasks/${userId}`);
          setTasks(response.data);
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      };
  
      
      fetchTasks();
    }, [userId]);

  return (
    <div className="max-w-[1024px] mx-auto">
    <div>
      <h2>Your Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <strong>Title:</strong> {task.title}
            <br />
            <strong>Description:</strong> {task.description}
            <br />
            <strong>Due Date:</strong> {task.dueDate}
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}
