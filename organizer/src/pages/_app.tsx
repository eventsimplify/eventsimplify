import { ReactElement, ReactNode, useEffect } from "react";
import Router from "next/router";
import type { AppProps } from "next/app";
import NProgress from "nprogress";
import { GoogleOAuthProvider } from "@react-oauth/google";

// import css
import "@/styles/globals.css";
import "antd/dist/reset.css";
import "nprogress/nprogress.css";

import { App as AntDesignApp, ConfigProvider, theme } from "antd";

import AppProvider from "@/contexts/AppProvider";
import { NextPage } from "next";
import HelpButton from "@/components/Help";
import AntDMessage from "@/components/AntDMessage";

// types for next layout
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm,
        }}
      >
        <AntDesignApp>
          <AppProvider>
            <AntDMessage />
            {getLayout(<Component {...pageProps} />)}
            <HelpButton />
          </AppProvider>
        </AntDesignApp>
      </ConfigProvider>
    </GoogleOAuthProvider>
  );
}
