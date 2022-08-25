/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { PageProps } from "$fresh/server.ts";

import Head from '../components/Head.tsx';
import Common from "../components/Common.tsx";
import C from '../islands/Charts.tsx';

export default function Chart(props: PageProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Welcome to the Fresh App Starter." />
        <title>ApexCharts</title>
        <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
      </Head>
      <Common>
        <C />
      </Common>
    </>
  );
}
