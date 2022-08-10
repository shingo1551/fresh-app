/** @jsx h */
/** @jsxFrag Fragment */
import { ComponentChildren, h } from "preact";

import Menu from "../islands/Menu.tsx";

export default function Common(props: { children: ComponentChildren }) {
  return (
    <div>
      <header>
        <h1 >Fresh App Starter</h1>
      </header>

      <main>
        <Menu />
        <div>
          {props.children}
        </div>
      </main>
    </div>
  );
}
