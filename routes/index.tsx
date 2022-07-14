/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";

import Meta from '../components/Meta.tsx';
import Menu from "../islands/Menu.tsx";

export default function Index() {
  return (
    <>
      <Head>
        <Meta />
        <meta name="description" content="Welcome to the Fresh App Starter." />
        <title>Fresh Starter App</title>
        <link href="/root.css" rel="stylesheet" />
        <link href="/menu.css" rel="stylesheet" />
      </Head>
      <div>
        <header>
          <h1>Fresh App Starter</h1>
        </header>

        <main>
          <Menu />
        </main>
      </div>
    </>
  );
}
