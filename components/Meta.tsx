/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";

export default function Meta() {
  return (
    <>
      <meta charSet={'utf-8'} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#16161d" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta http-equiv="x-ua-compatible" content="IE=Edge" />
    </>
  );
}
