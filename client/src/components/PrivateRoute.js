import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthentication } from "../customHook/Auth";

export default function PrivateRoute({ children}) {


  const navigate = useNavigate();

  const {isAuthenticated} = useAuthentication();

  useEffect(()=>{
    if(!isAuthenticated){
      
      navigate("/login")
    }
  },[isAuthenticated,navigate]);


  return children;
}
