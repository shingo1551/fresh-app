/** @jsx h */
/** @jsxFrag Fragment */
import { ComponentChildren, h } from "preact";
import { tw } from "@twind";

import Menu from "../islands/Menu.tsx";

export default function Common(props: { children: ComponentChildren }) {
  return (
    <div>
      <header class={tw`bg-[#5851ff] text-white h-14 flex items-center shadow-inner`}>
        <h1 class={tw`text-[1.4rem] font-medium text-white px-3 py-0`}>Fresh App Starter</h1>
      </header>

      <main class={tw`flex p-2.5`}>
        <Menu />
        <div>
          {props.children}
        </div>
      </main>
    </div>
  );
}
