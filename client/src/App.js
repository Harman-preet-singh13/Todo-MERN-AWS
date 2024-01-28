import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import Login from "./components/Authpage/Login";
import Register from "./components/Authpage/Register";
import PrivateRoute from "./components/PrivateRoute";
import Homepage from "./components/Homepage";
import { AuthProvider } from "./customHook/Auth";


export default function App() {


  return (
    <AuthProvider>
      <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/homepage/*"
          element={
            <PrivateRoute >
              <Homepage />
            </PrivateRoute>
          }
        />

        <Route path="/" element={<Navigate replace to="/homepage" />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}
