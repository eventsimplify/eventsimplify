import "@/styles/globals.css";
import type { AppProps } from "next/app";

import "antd/dist/reset.css";
import locale from "antd/es/date-picker/locale/zh_CN";

import { App as AntDesignApp, ConfigProvider, theme } from "antd";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
      }}
    >
      <AntDesignApp>
        <Component {...pageProps} />
      </AntDesignApp>
    </ConfigProvider>
  );
}
