/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface Props {
  href: string;
  children: HTMLElement | string;
  selected?: boolean;
  onClick?: () => void;
}

export default function A(props: Props) {
  return (
    <li >
      <a href={props.href} disabled={!IS_BROWSER}>{props.children}</a>
    </li>
  );
}
