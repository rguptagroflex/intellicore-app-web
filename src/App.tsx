import { useState } from "react";

import "./App.css";
import { Button } from "./app/components/shared/button";
import { ColorModeButton } from "./app/components/shared/color-mode";
import { Box } from "@chakra-ui/react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Layout from "./app/components/layout/Layout";
import Login from "./app/pages/auth/Login";
import Home from "./app/pages/home/Home";
import AuthColumn from "./app/pages/auth/AuthColumn";
import SignUp from "./app/pages/auth/SignUp";

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
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/auth" element={<AuthColumn />}>
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/login" element={<Login />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
