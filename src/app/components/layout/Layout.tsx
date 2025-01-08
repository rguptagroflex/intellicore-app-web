import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <Sidebar />
      {/* <Box bg={"bg.tertiary"} className="container" w="100%" minH="100vh"> */}
      <Outlet />
      {/* </Box> */}
    </>
  );
};

export default Layout;
