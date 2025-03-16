import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname !== "/welcome") {
      router.replace("/welcome");
    }
  }, [router.pathname]);

  return <Component {...pageProps} />;
}
