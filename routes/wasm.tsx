import { Handlers, PageProps } from "$fresh/server.ts";

import Head from "../components/Head.tsx";
import Body from "../components/Body.tsx";

interface Props {
  text: string;
}

interface Wasm {
  add: (a: number, b: number) => number;
  sub: (a: number, b: number) => number;
  memory: unknown;
}

export const handler: Handlers<Props> = {
  async GET(req, ctx) {
    const wasmCode = await Deno.readFile("static/release.wasm");
    const wasmModule = new WebAssembly.Module(wasmCode);
    const wasmInstance = new WebAssembly.Instance(wasmModule);
    // const add = wasmInstance.exports.add as CallableFunction
    const wasm = wasmInstance.exports as unknown as Wasm;

    return ctx.render({ text: "sub(1, 2): " + wasm.sub(1, 2) });
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
