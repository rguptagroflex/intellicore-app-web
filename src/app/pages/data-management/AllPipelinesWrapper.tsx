import PageContent from "@/app/components/layout/page-content";
import { Grid, GridItem } from "@chakra-ui/react";

const AllPipelinesWrapper = () => {
  const pipelineItem = (
    <GridItem
      h="20"
      bgColor={"gray.300"}
      borderRadius={"25px"}
      width={"283px"}
      height={"155px"}
    ></GridItem>
  );

  return (
    <PageContent title="Data Management">
      <Grid
        marginTop={"4"}
        padding={"10"}
        bg={"bg.secondary"}
        borderRadius={"45px"}
        templateColumns="repeat(3, 1fr)"
        gap="6"
        justifyContent={"center"}
        alignItems={"center"} 
      >
        {[
          pipelineItem,
          pipelineItem,
          pipelineItem,
          pipelineItem,
          pipelineItem,
          pipelineItem,
          pipelineItem,
          pipelineItem,
          pipelineItem,
        ]}
      </Grid>
    </PageContent>
  );
};

export default AllPipelinesWrapper;
