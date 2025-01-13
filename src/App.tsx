import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Layout from "./app/components/layout/Layout";
import Home from "./app/pages/home/Home";
import AuthLayout from "./app/pages/auth/AuthLayout";
import Login from "./app/pages/auth/Login";
import Signup from "./app/pages/auth/SignUp";
import ProjectWrapper from "@/app/pages/intellicore/projects/ProjectWrapper";
import CreatePipeline from "@/app/pages/intellicore/projects/views/CreatePipeline";
import SourceDBSelection from "@/app/pages/intellicore/projects/views/SourceDBSelection";
import ConfigureDB from "@/app/pages/intellicore/projects/views/ConfigureDB";
import SelectTables from "@/app/pages/intellicore/projects/views/SelectTables";
import SchedulePipeline from "@/app/pages/intellicore/projects/views/SchedulePipeline";
import CreateProject from "@/app/pages/intellicore/projects/views/CreateProject";
import PipelineDetails from "@/app/pages/intellicore/projects/views/PipelineDetails";

function App() {
  const pipelineRoutes = [
    { path: "create-pipeline", component: CreatePipeline },
    { path: "source-db", component: SourceDBSelection },
    { path: "configure-db", component: ConfigureDB },
    { path: "select-tables", component: SelectTables },
    { path: "schedule", component: SchedulePipeline },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/data-management" element={<Home />} />
          <Route path="/insights" element={<Home />} />
          <Route path="/reports" element={<Home />} />
          {/* <Route path="/projects" element={<Projects />}></Route> */}
          <Route path="/projects" element={<ProjectWrapper />}>
            <Route index element={<CreateProject />} />
            {pipelineRoutes.map(({ path, component: Component }) => (
              <Route
                key={path}
                path={`/projects/:projectId/pipelines/${path}`}
                element={<Component />}
              />
            ))}
            <Route
              path="/projects/:projectId/pipelines/:pipelineId/pipeline-details"
              element={<PipelineDetails />}
            />
          </Route>
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/sign-up" element={<Signup />} />
        </Route>
        {/* <Route path="*" element={<Navigate to={"/"} />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
