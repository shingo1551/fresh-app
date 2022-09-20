import { PageProps } from "$fresh/server.ts";

import Head from "../components/Head.tsx";
import Body from "../components/Body.tsx";
import Chart from "../islands/Charts.tsx";

export default function Index(props: PageProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Welcome to the Fresh App Starter." />
        <title>ApexCharts</title>
        <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
        <link href="/chart.css" rel="stylesheet" />
      </Head>
      <Body>
        <Chart />
      </Body>
    </>
  );
}
