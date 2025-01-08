import { useState } from "react";
import { Box, Flex, IconButton, VStack, Image } from "@chakra-ui/react";
import { NavLink } from "react-router";
import logo from "@/assets/intellicore/logo.svg";
import { NavItem } from "./nav-element";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";

const navItems = [
  { icon: MdDashboard, label: "Dashboard", to: "/" },
  { icon: MdDashboard, label: "Data Management", to: "/data-management" },
  { icon: MdDashboard, label: "Insights", to: "/insights" },
  { icon: MdDashboard, label: "Reports", to: "/reports" },
];

export default function Sidebar() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const openSidebar = () => {
    if (!sidebarIsOpen) {
      setSidebarIsOpen(true);
    }
  };
  const closeSidebar = () => {
    if (sidebarIsOpen) {
      setSidebarIsOpen(false);
    }
  };

  const toggleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };

  return (
    <Box
      bg={"bg.tertiary"}
      className="sidebar-container"
      width={sidebarIsOpen ? "80px" : "230px"}
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
            <NavLink onClick={openSidebar} to={item.to} key={index}>
              <NavItem
                key={index}
                icon={item.icon}
                label={item.label}
                isCollapsed={sidebarIsOpen}
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
          {sidebarIsOpen ? (
            <FaChevronRight size={20} />
          ) : (
            <FaChevronLeft size={20} />
          )}
        </IconButton>
      </Box>
    </Box>
  );
}
