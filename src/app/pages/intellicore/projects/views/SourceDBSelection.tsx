import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Button, Grid, Text, VStack } from "@chakra-ui/react";
import {
  RadioCardItem,
  RadioCardLabel,
  RadioCardRoot,
} from "@/app/components/shared/radio-card";

const SourceDBSelection: React.FC = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const [selectedDB, setSelectedDB] = useState("");

  const frameworks = {
    items: [
      { value: "mssql", label: "MSSQL", description: "Microsoft SQL Server" },
      { value: "mysql", label: "MySQL", description: "MySQL" },
      { value: "oracle", label: "Oracle", description: "Oracle" },
      { value: "postgres", label: "Postgres", description: "Postgres" },
      { value: "salesforce", label: "Salesforce", description: "Salesforce" },
      { value: "mongodb", label: "MongoDB", description: "MongoDB" },
      { value: "snowflake", label: "Snowflake", description: "Snowflake" },
    ],
  };

  const handleNext = () => {
    if (selectedDB) {
      navigate(`/projects/${projectId}/pipelines/configure-db`, {
        state: { selectedDB },
      });
    }
  };

  return (
    <VStack gap={4} mt={5}>
      <Text>Select Source Database</Text>
      <RadioCardRoot defaultValue="next" my={4}>
        <RadioCardLabel>Select framework</RadioCardLabel>
        <Grid templateColumns={{ lg: "repeat(4, 1fr)" }} gap={4} mt={2}>
          {frameworks.items.map((item) => (
            <RadioCardItem
              label={item.label}
              description={item.description}
              onChange={() => setSelectedDB(item.label)}
              key={item.value}
              value={item.value}
            />
          ))}
        </Grid>
      </RadioCardRoot>
      <Button
        bgColor={{ _light: "bg.secondary", _dark: "bg.primary" }}
        color={{ _light: "fg.secondary", _dark: "fg.primary" }}
        onClick={handleNext}
        disabled={!selectedDB}
      >
        Next
      </Button>
    </VStack>
  );
};

export default SourceDBSelection;
