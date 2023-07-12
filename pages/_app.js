import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../styles/globals.css";
import "../styles/App.css";
import "../styles/Layout.css";
import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";

import { Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import TagManager from "react-gtm-module";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  const Layout = Component.layout || Fragment;
  const router = useRouter();
  useEffect(() => {
    TagManager.initialize({ gtmId: "G-WXNBYYH45D" });
  }, []);
  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("776091353545037"); // facebookPixelIds
        ReactPixel.pageView();

        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  }, [router.events]);
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
