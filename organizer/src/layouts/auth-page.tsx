import React from "react";
import { useRouter } from "next/router";

import Redirect from "@/components/Redirect";
import { useAppContext } from "@/contexts/AppProvider";

const AuthPageLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAppContext();
  const router = useRouter();

  if (user) {
    return (
      <Redirect to={router.query.redirect?.toString() || "/admin/dashboard"} />
    );
  }

  return <>{children}</>;
};

export default AuthPageLayout;
