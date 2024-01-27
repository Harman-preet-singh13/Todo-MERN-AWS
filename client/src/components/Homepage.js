import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Todo from "./Todo/Todo";


export default function Homepage() {

  const [userId, setUserId] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('jwtToken');
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const response = await axios.get('http://localhost:8080/api/token', { headers });
        
        setUserId(response.data.decoded.userId);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div>
      <Navbar />
      
      <Todo userId={userId}/>
    </div>
  );
}
