import { Box, Flex, IconButton, VStack, Image } from "@chakra-ui/react";
import { NavLink } from "react-router";
import logo from "@/assets/intellicore/logo.svg";
import { NavItem } from "./nav-element";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "@/app/hooks/useReduxHooks";
import { openSidebar, closeSidebar } from "@/app/redux/features/themeSlice";

const navItems = [
  { icon: MdDashboard, label: "Dashboard", to: "/" },
  { icon: MdDashboard, label: "Data Management", to: "/data-management" },
  { icon: MdDashboard, label: "Insights", to: "/insights" },
  { icon: MdDashboard, label: "Reports", to: "/reports" },
];

export default function Sidebar() {
  const dispatch = useAppDispatch();
  const sidebarIsActive = useAppSelector(
    (state) => state.themeData.sidebarIsActive
  );

  const dispatchOpenSidebar = () => {
    if (!sidebarIsActive) {
      dispatch(openSidebar());
    }
  };

  const dispatchCloseSidebar = () => {
    if (sidebarIsActive) {
      dispatch(closeSidebar());
    }
  };

  const toggleSidebar = () => {
    if (sidebarIsActive) {
      dispatch(closeSidebar());
    } else {
      dispatch(openSidebar());
    }
  };

  return (
    <Box
      bg={"bg.tertiary"}
      className="sidebar-container"
      width={sidebarIsActive ? "230px" : "80px"}
      transition="width 0.2s ease"
      height="100vh"
      position={"fixed"}
    >
      <Box
        height="100%"
        className="main-sidebar"
        bg={"bg.primary"}
        color="white"
        // position="relative"
        boxShadow="lg"
        borderTopRightRadius={"30px"}
        borderBottomRightRadius={"30px"}
        paddingTop={"10px"}
      >
        <Image
          src={logo}
          w={"120px"}
          objectFit={"contain"}
          marginLeft={"auto"}
          marginRight={"auto"}
          marginBottom={"50px"}
        />

        <VStack align="stretch">
          {navItems.map((item, index) => (
            <NavLink onClick={dispatchOpenSidebar} to={item.to} key={index}>
              <NavItem
                key={index}
                icon={item.icon}
                label={item.label}
                sidebarIsOpen={sidebarIsActive}
              />
            </NavLink>
          ))}
        </VStack>

        <IconButton
          aria-label="Toggle Sidebar"
          position="absolute"
          bottom={4}
          right={-3}
          transform="translateX(50%)"
          borderRadius="full"
          onClick={toggleSidebar}
          bg="bg.primary"
          _hover={{ bg: "gray.600" }}
          size="sm"
        >
          {sidebarIsActive ? (
            <FaChevronLeft size={20} />
          ) : (
            <FaChevronRight size={20} />
          )}
        </IconButton>
      </Box>
    </Box>
  );
}
