import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import "antd/dist/reset.css";

import { App as AntDesignApp, ConfigProvider, theme } from "antd";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm,
        }}
      >
        <AntDesignApp>
          <Component {...pageProps} />
        </AntDesignApp>
      </ConfigProvider>
    </SessionProvider>
  );
}
