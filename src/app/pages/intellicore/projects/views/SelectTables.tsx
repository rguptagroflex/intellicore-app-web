import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Button, CheckboxGroup, Flex, Text, VStack } from "@chakra-ui/react";
import { CheckboxCard } from "@/app/components/shared/checkbox-card";

const SelectTables: React.FC = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();
  // const location = useLocation();
  const [selectedTables, setSelectedTables] = useState<string[]>([]);

  const tables = ["users", "orders", "products", "invoices", "logs"]; // Mock data

  const handleTableSelect = (table: string) => {
    setSelectedTables((prev) =>
      prev.includes(table) ? prev.filter((t) => t !== table) : [...prev, table]
    );
  };

  const handleNext = () => {
    navigate(`/projects/${projectId}/pipelines/schedule`, {
      state: { selectedTables },
    });
  };

  return (
    <VStack gap={4}>
      <h1>Select Tables to Migrate</h1>
      <CheckboxGroup defaultValue={["next"]}>
        <Text textStyle="sm" fontWeight="medium">
          Select framework(s)
        </Text>
        <Flex gap="2">
          {tables.map((table) => (
            <CheckboxCard
              // label={table.title}
              label="Table"
              // description={table.description}
              description="Table description"
              key={table}
              // value={table.value}
              checked={selectedTables.includes(table)}
              onChange={() => handleTableSelect(table)}
            />
          ))}
        </Flex>
      </CheckboxGroup>
      {/* {tables.map((table) => (
        <Checkbox
          key={table}
          isChecked={selectedTables.includes(table)}
          onChange={() => handleTableSelect(table)}
        >
          {table}
        </Checkbox>
      ))} */}
      <Button
        bgColor={{ _light: "bg.secondary", _dark: "bg.primary" }}
        color={{ _light: "fg.secondary", _dark: "fg.primary" }}
        onClick={handleNext}
        disabled={selectedTables.length === 0}
      >
        Next
      </Button>
    </VStack>
  );
};

export default SelectTables;
