/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { PageProps } from "$fresh/server.ts";

import Head from '../components/Head.tsx';
import Common from "../components/Common.tsx";
import D from "../islands/DragAndDrop.tsx";

export default function Index(props: PageProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Welcome to the Fresh App Starter." />
        <title>Fresh Starter App</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.15.0/Sortable.min.js" integrity="sha512-Eezs+g9Lq4TCCq0wae01s9PuNWzHYoCMkE97e2qdkYthpI0pzC3UGB03lgEHn2XM85hDOUF6qgqqszs+iXU4UA==" crossOrigin="anonymous" referrerpolicy="no-referrer"></script>
      </Head>
      <Common>
        <D></D>
      </Common>
    </>
  );
}
