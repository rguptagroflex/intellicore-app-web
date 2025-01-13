import React from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { Button, VStack, Text, Box } from "@chakra-ui/react";

const PipelineDetails: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { projectId } = useParams();
  const { selectedDB, credentials, selectedTables, timeLimit } =
    location.state || {};

  const handleFinish = () => {
    alert("Pipeline creation completed!");
    navigate(`/projects/${projectId}`);
  };

  return (
    <VStack gap={6}>
      <h1>Pipeline Summary</h1>
      <Box borderWidth="1px" p={4} borderRadius="md" w="100%" maxW="500px">
        <Text fontWeight="bold">Source Database:</Text>
        <Text>{selectedDB}</Text>
        <Text fontWeight="bold" mt={4}>
          Configuration:
        </Text>
        <Text>Host: {credentials?.host}</Text>
        <Text>Port: {credentials?.port}</Text>
        <Text>Username: {credentials?.username}</Text>
        <Text fontWeight="bold" mt={4}>
          Selected Tables:
        </Text>
        <Text>{selectedTables?.join(", ") || "None selected"}</Text>
        <Text fontWeight="bold" mt={4}>
          Time Limit:
        </Text>
        <Text>{timeLimit || "Not specified"}</Text>
      </Box>
      <Button
        bgColor={{ _light: "bg.secondary", _dark: "bg.primary" }}
        color={{ _light: "fg.secondary", _dark: "fg.primary" }}
        onClick={handleFinish}
        disabled={!selectedDB || !credentials || !selectedTables}
      >
        Finish
      </Button>
    </VStack>
  );
};

export default PipelineDetails;
