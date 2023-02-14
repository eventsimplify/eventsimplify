import React from "react";
import { useRouter } from "next/router";

import Loader from "@/components/Loader";
import Redirect from "@/components/Redirect";

import useAuth from "@/hooks/useAuth";

const AuthPageLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading === "loading") {
    return <Loader />;
  }

  if (user) {
    return (
      <Redirect to={router.query.redirect?.toString() || "/admin/dashboard"} />
    );
  }

  return <>{children}</>;
};

export default AuthPageLayout;
