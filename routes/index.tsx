/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { tw } from "@twind";

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
        <header class={tw`bg-[#5851ff] text-white h-14 flex items-center shadow-inner`}>
          <h1 class={tw`text-[1.4rem] font-medium text-white px-3 py-0`}>Fresh App Starter</h1>
        </header>

        <main class={tw`flex p-2.5`}>
          <Menu />
        </main>
      </div>
    </>
  );
}
