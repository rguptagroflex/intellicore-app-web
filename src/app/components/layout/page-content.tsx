import { useAppSelector } from "@/app/hooks/useReduxHooks";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

const pageContentMaxWidth = "1200px";

interface PageContentProps {
  children?: React.ReactNode;
  title?: string;
}

const PageContent = ({ title, children }: PageContentProps) => {
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
        width={"full"}
        margin={"0 auto"}
        maxWidth={pageContentMaxWidth}
      >
        <Box
          className="page-content"
          px={{ base: "10px", lg: "40px" }}
          paddingTop={"0px"}
          position={"relative"}
          width={"full"}
          overflowY={"hidden"}
        >
          <Box
            className="page-content-header"
            width={"full"}
            marginTop={"15px"}
          >
            {title?.length && (
              <Text
                textStyle={"2xl"}
                borderRadius={"25px"}
                bg={"bg.primary"}
                px={5}
                py={4}
              >
                {title}
              </Text>
            )}
          </Box>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default PageContent;
