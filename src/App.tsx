import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Layout from "./app/components/layout/Layout";
import Home from "./app/pages/home/Home";
import AuthLayout from "./app/pages/auth/AuthLayout";
import Login from "./app/pages/auth/Login";
import Signup from "./app/pages/auth/Sign-up";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/data-management" element={<Home />} />
          <Route path="/insights" element={<Home />} />
          <Route path="/reports" element={<Home />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/sign-up" element={<Signup />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
