import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Button, Input, VStack } from "@chakra-ui/react";

const SchedulePipeline: React.FC = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();
  // const location = useLocation();
  const [timeLimit, setTimeLimit] = useState("");

  const handleSubmit = () => {
    // Here you would send the pipeline creation data to the server
    alert("Pipeline Scheduled!");
    navigate(`/projects/${projectId}`);
  };

  return (
    <VStack gap={4}>
      <h1>Schedule Pipeline</h1>
      <Input
        placeholder="Enter time limit (e.g., 24h)"
        value={timeLimit}
        onChange={(e) => setTimeLimit(e.target.value)}
      />
      <Button
        bgColor={{ _light: "bg.secondary", _dark: "bg.primary" }}
        color={{ _light: "fg.secondary", _dark: "fg.primary" }}
        onClick={handleSubmit}
        disabled={!timeLimit}
      >
        Submit
      </Button>
    </VStack>
  );
};

export default SchedulePipeline;
