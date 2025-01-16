import { Flex, Text } from "@chakra-ui/react";

import { Tooltip } from "../shared/tooltip";

interface NavItemProps {
  icon: any;
  label: string;
  sidebarIsOpen: boolean;
  onClick?: () => void;
}

export const NavItem = ({
  icon: Icon,
  label,
  sidebarIsOpen,
  onClick,
}: NavItemProps) => {
  const IconComponent = <Icon size={20} />;
  const linkContent = (
    <Flex
      p={3}
      mx={3}
      borderRadius="lg"
      role="group"
      cursor="pointer"
      onClick={onClick}
      _hover={{
        bg: "secondary",
        color: "fg.secondary",
      }}
      alignItems="center"
      transition="all 0.2s"
    >
      {IconComponent}
      {sidebarIsOpen && (
        <Text ml={4} fontSize="sm">
          {label}
        </Text>
      )}
    </Flex>
  );

  return sidebarIsOpen ? (
    linkContent
  ) : (
    <Tooltip content={label} positioning={{ placement: "right-end" }}>
      {linkContent}
    </Tooltip>
  );
};
