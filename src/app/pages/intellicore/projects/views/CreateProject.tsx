import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Box, Button, Flex, Grid, Input, Text } from "@chakra-ui/react";

const CreateProject: React.FC = () => {
  const [projectName, setProjectName] = useState("");
  const navigate = useNavigate();
  /* const projects: Array<{ id: string; name: string }> = [
      { id: "project1", name: "project1" },
      { id: "project2", name: "project2" },
      { id: "project3", name: "project3" },
      { id: "project4", name: "project4" },
      { id: "project5", name: "project5" },
      { id: "project6", name: "project6" },
      { id: "project7", name: "project7" },
      { id: "project8", name: "project8" },
      { id: "project9", name: "project9" },
    ]; */
  const projects: Array<{ id: string; name: string }> = [];

  const handleSubmit = () => {
    // Mock project creation logic
    const projectId = Date.now().toString(); // Replace with server-generated ID
    // alert(`Project "${projectName}" created successfully!`);
    navigate(`/projects/${projectId}/pipelines/create-pipeline`);
  };

  return (
    <Flex direction="column" h="100vh">
      {location.pathname === "/projects" ? (
        projects.length > 0 ? (
          <Grid py={"21px"} columns={3} gap={4}>
            {projects.map((project) => (
              <Box key={project.id} p={6} borderWidth={1} borderRadius="lg">
                <Text fontSize="xl">{project.name}</Text>
              </Box>
            ))}
          </Grid>
        ) : (
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
              placeholder="Enter project name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              p={6}
            />
            <Button
              bgColor={{ _light: "bg.secondary", _dark: "bg.primary" }}
              color={{ _light: "fg.secondary", _dark: "fg.primary" }}
              onClick={handleSubmit}
              disabled={!projectName}
            >
              Create new project
            </Button>
          </Flex>
        )
      ) : null}
      {/* <h1>Create New Project</h1>
      <Input
        placeholder="Enter project name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
      <Button colorScheme="teal" onClick={handleSubmit} disabled={!projectName}>
        Create Project
      </Button> */}
    </Flex>
  );
};

export default CreateProject;
