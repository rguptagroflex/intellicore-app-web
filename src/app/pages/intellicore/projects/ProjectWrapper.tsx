import {
  BreadcrumbLink,
  BreadcrumbRoot,
} from "@/app/components/shared/breadcrumb";
import { Box, Flex, Separator, Text } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router";
import { useMemo } from "react";

const routeLabels: Record<string, string> = {
  projects: "Projects",
  pipelines: "Pipelines",
  "create-pipeline": "Create Pipeline",
  "pipeline-details": "Pipeline Details",
  "source-db": "Source DB Selection",
  "configure-db": "Configure Database",
  "select-tables": "Select Tables",
  schedule: "Schedule Pipeline",
};

const ProjectWrapper = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  const breadcrumbs = useMemo(() => {
    return pathSegments.map((segment, index) => {
      const label = routeLabels[segment] || segment; // Fallback to the raw segment if no label is found
      const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
      return { label, path };
    });
  }, [pathSegments]);

  const pageTitle = breadcrumbs[breadcrumbs.length - 1]?.label || "Dashboard";

  return (
    <Flex direction="column" h="100vh">
      <Box py="21px">
        <BreadcrumbRoot>
          {breadcrumbs.map(({ label, path }, index) => (
            <BreadcrumbLink key={index} href={path}>
              {label}
            </BreadcrumbLink>
          ))}
        </BreadcrumbRoot>
      </Box>

      <Separator borderColor="white" />

      <Flex justify="space-between" alignItems="center" py="21px">
        <Text fontSize="xl">{pageTitle}</Text>
      </Flex>

      <Separator borderColor="white" />

      <Box overflow="auto">
        <Outlet />
      </Box>
    </Flex>
  );
};

export default ProjectWrapper;
