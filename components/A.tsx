/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

interface Props {
  href: string;
  children: HTMLElement | string;
  selected?: boolean;
  onClick?: () => void;
}

export default function A(props: Props) {
  return (
    <li class={tw`h-6`}>
      <a href={props.href} class={tw`px-1 py-0.5`} disabled={!IS_BROWSER}>{props.children}</a>
    </li>
  );
}
