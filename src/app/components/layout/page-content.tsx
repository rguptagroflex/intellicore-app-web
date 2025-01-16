import { useAppSelector } from "@/app/hooks/useReduxHooks";
import { Box } from "@chakra-ui/react";
import React from "react";

interface PageContentProps {
  children?: React.ReactNode;
}

const PageContent = ({ children }: PageContentProps) => {
  const sidebarIsActive = useAppSelector(
    (state) => state.themeData.sidebarIsActive
  );

  return (
    <Box
      className="view-wrapper"
      marginLeft={sidebarIsActive ? "calc(230px)" : "80px"}
      width={sidebarIsActive ? "calc(100% - 230px)" : "calc(100% - 80px)"}
      minH="100vh"
      backgroundColor={"bg.tertiary"}
      transition={"all 0.2s"}
    >
      <Box
        className="page-content-wrapper"
        width={"100%"}
        margin={"0 auto"}
        maxWidth={"1200px"}
      >
        <Box
          className="page-content"
          padding={{ base: "10px", lg: "40px" }}
          width={"100%"}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default PageContent;
