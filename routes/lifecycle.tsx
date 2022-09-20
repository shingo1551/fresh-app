import { PageProps } from "$fresh/server.ts";

import Head from "../components/Head.tsx";
import Body from "../components/Body.tsx";
import LifeCycle from "../islands/LifeCycle.tsx";

export default function Index(props: PageProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Welcome to the Fresh App Starter." />
        <title>Fresh Starter App</title>
      </Head>
      <Body>
        <LifeCycle count={10} />
      </Body>
    </>
  );
}
