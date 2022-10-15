import { PageProps } from "$fresh/server.ts";

import Head from "../components/Head.tsx";
import Swiper from "../islands/SwiperJS.tsx";

export default function Index(props: PageProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Welcome to the Fresh App Starter." />
        <title>Fresh Starter App</title>
        <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
        <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
      </Head>
      <Swiper />
    </>
  );
}
