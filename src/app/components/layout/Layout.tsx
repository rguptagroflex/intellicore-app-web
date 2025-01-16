import { Outlet, useNavigate } from "react-router";
import Sidebar from "./side-bar";
import { useEffect, useState } from "react";
import config from "../../../../config";
import { HStack, Stack } from "@chakra-ui/react";
import { Skeleton, SkeletonCircle } from "../shared/skeleton";

const Layout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(config.checkLoginTokenIsValid(), "Token is valid or not");
    if (!config.checkLoginTokenIsValid()) {
      navigate("/auth/login");
    } else {
      setLoading(false);
    }
  });

  if (loading) {
    return (
      <HStack gap="5">
        <SkeletonCircle size="12" />
        <Stack flex="1">
          <Skeleton height="5" />
          <Skeleton height="5" width="80%" />
        </Stack>
      </HStack>
    );
  } else {
    return (
      <>
        <Sidebar />
        <Outlet />
      </>
    );
  }
};

export default Layout;
