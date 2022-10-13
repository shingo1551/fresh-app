import { PageProps } from "$fresh/server.ts";

import Head from "../components/Head.tsx";
import Animation from "../islands/Animation.tsx";

export default function Index(props: PageProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Welcome to the Fresh App Starter." />
        <title>Fresh Starter App</title>
        <link href="/animation.css" rel="stylesheet" />
      </Head>
      <Animation />
    </>
  );
}
