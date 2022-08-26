/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';
import { PageProps } from '$fresh/server.ts';

import Head from '../components/Head.tsx';
import Common from '../components/Common.tsx';
import C from '../islands/Counter.tsx';

export default function Index(props: PageProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Welcome to the Fresh App Starter." />
        <title>Fresh Starter App</title>
      </Head>
      <Common>
        <C start={10} />
      </Common>
    </>
  );
}
