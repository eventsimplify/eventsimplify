import React, { useEffect } from "react";
import { useRouter } from "next/router";

import Loader from "./Loader";

function Redirect({
  to,
  redirect,
}: {
  to: string;
  redirect?: string | string[];
}) {
  const router = useRouter();

  useEffect(() => {
    router.push({
      pathname: to,
      query: redirect ? { redirect } : {},
    });
  }, [to, redirect]);

  return <Loader />;
}

export default Redirect;
