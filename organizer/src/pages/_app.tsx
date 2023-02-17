import Router from "next/router";
import type { AppProps } from "next/app";
import NProgress from "nprogress";

// import css
import "@/styles/globals.css";
import "antd/dist/reset.css";
import "nprogress/nprogress.css";

import { App as AntDesignApp, ConfigProvider, theme } from "antd";
import { useEffect } from "react";
import AppProvider from "@/contexts/AppProvider";
import EventProvider from "@/contexts/EventProvider";

export default function App({ Component, pageProps }: AppProps) {
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

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
      }}
    >
      <AntDesignApp>
        <AppProvider>
          <EventProvider>
            <Component {...pageProps} />
          </EventProvider>
        </AppProvider>
      </AntDesignApp>
    </ConfigProvider>
  );
}
