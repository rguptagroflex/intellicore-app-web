import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Button, Flex, Input } from "@chakra-ui/react";

const CreatePipeline: React.FC = () => {
  const [pipelineName, setPipelineName] = useState("");
  const navigate = useNavigate();
  const { projectId } = useParams();

  const handleNext = () => {
    navigate(`/projects/${projectId}/pipelines/source-db`);
  };

  return (
    <Flex
      direction="column"
      flexGrow={1}
      justify="center"
      alignItems="center"
      px="20"
      py="21px"
      gap={5}
    >
      <Input
        placeholder="Enter pipeline name"
        value={pipelineName}
        onChange={(e) => setPipelineName(e.target.value)}
        p={6}
      />
      <Button
        bgColor={{ _light: "bg.secondary", _dark: "bg.primary" }}
        color={{ _light: "fg.secondary", _dark: "fg.primary" }}
        onClick={handleNext}
        disabled={!pipelineName}
      >
        Create a new pipeline
      </Button>
    </Flex>
  );
};

export default CreatePipeline;
