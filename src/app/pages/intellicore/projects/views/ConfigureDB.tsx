import React, { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router";
import { Button, Input, Text, VStack } from "@chakra-ui/react";
import { PasswordInput } from "@/app/components/shared/password-input";

const ConfigureDB: React.FC = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const location = useLocation();
  const { selectedDB } = location.state || {};

  const [credentials, setCredentials] = useState({
    pipelineName: "",
    username: "",
    password: "",
    name: "",
    host: "",
    port: "",
  });

  const handleNext = () => {
    navigate(`/projects/${projectId}/pipelines/select-tables`, {
      state: { ...credentials, selectedDB },
    });
  };

  return (
    <VStack gap={4} py={8} px={20}>
      <Text>Configure {selectedDB} Database</Text>
      {/* <Input
        placeholder="Enter a name for your pipeline"
        value={credentials.pipelineName}
        onChange={(e) =>
          setCredentials((prev) => ({ ...prev, pipelineName: e.target.value }))
        }
        p={6}
      /> */}
      <Input
        placeholder="Enter Username"
        value={credentials.username}
        onChange={(e) =>
          setCredentials((prev) => ({ ...prev, username: e.target.value }))
        }
        p={6}
      />
      <PasswordInput
        type="password"
        placeholder="Enter Password"
        value={credentials.password}
        onChange={(e) =>
          setCredentials((prev) => ({ ...prev, password: e.target.value }))
        }
        p={6}
      />
      <Input
        placeholder="Enter Name"
        value={credentials.name}
        onChange={(e) =>
          setCredentials((prev) => ({ ...prev, name: e.target.value }))
        }
        p={6}
      />
      <Input
        placeholder="Enter Host"
        value={credentials.host}
        onChange={(e) =>
          setCredentials((prev) => ({ ...prev, host: e.target.value }))
        }
        p={6}
      />
      <Input
        placeholder="Enter Port"
        value={credentials.port}
        onChange={(e) =>
          setCredentials((prev) => ({ ...prev, port: e.target.value }))
        }
        p={6}
      />
      <Button
        bgColor={{ _light: "bg.secondary", _dark: "bg.primary" }}
        color={{ _light: "fg.secondary", _dark: "fg.primary" }}
        onClick={handleNext}
        disabled={
          !credentials.host || !credentials.port || !credentials.username
        }
      >
        Next
      </Button>
    </VStack>
  );
};

export default ConfigureDB;
