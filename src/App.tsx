import { useState } from "react";

import "./App.css";
import { Button } from "./app/components/shared/button";
import { ColorModeButton } from "./app/components/shared/color-mode";
import { Box } from "@chakra-ui/react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Layout from "./app/components/layout/Layout";
import Login from "./app/pages/auth/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Button isPrimary size={"lg"}>
                I am a buton
              </Button>
            }
          />
          <Route path="/data-management" element={<div>Data management</div>} />
          <Route path="/insights" element={<div>Insights</div>} />
          <Route path="/reports" element={<div>Reports</div>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
