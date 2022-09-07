/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { PageProps } from "$fresh/server.ts";

import Head from '../components/Head.tsx';
import Body from "../components/Body.tsx";
import ToDo from "../islands/ToDo.tsx";

export default function Index(props: PageProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Welcome to the Fresh App Starter." />
        <title>Fresh Starter App</title>
        <link href="/todo.css" rel="stylesheet" />
      </Head>
      <Body>
        <ToDo />
      </Body>
    </>
  );
}
