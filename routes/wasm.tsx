import { Handlers, PageProps } from "$fresh/server.ts";

import Head from "../components/Head.tsx";
import Body from "../components/Body.tsx";

interface Props {
  text: string;
}

export const handler: Handlers<Props> = {
  async GET(req, ctx) {
    const wasmCode = await Deno.readFile("static/add.wasm");
    const wasmModule = new WebAssembly.Module(wasmCode);
    const wasmInstance = new WebAssembly.Instance(wasmModule);
    const add = wasmInstance.exports.add as CallableFunction

    return ctx.render({ text: "add(1, 2): " + add(1, 2) });
  },
};

export default function Index(props: PageProps<Props>) {
  return (
    <>
      <Head>
        <meta name="description" content="Welcome to the Fresh App Starter." />
        <title>Fresh Starter App</title>
      </Head>
      <Body>
        <h1>{props.data.text}</h1>
      </Body>
    </>
  );
}
