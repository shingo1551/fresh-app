/** @jsx h */
import { h } from "preact";
import A from '../components/A.tsx';
import { tw } from "@twind";

export default function Menu() {
  function onClick() {
    // deno-lint-ignore no-explicit-any
    (window.location as any) = '/hello/clicked';
  }

  return (
    <ul class={tw`list-none`}>
      <A href='/hello'>Hello</A>
      <A href='/hello/abc'>Hello ABC</A>

      <A href='/hello/clicked' onClick={onClick}>Click me!</A>

      <A href='/counter'>Counter</A>
      <A href='/todo'>ToDo</A>

      <A href='/chart'>Chart</A>

      <A href='/draganddrop'>Drag and Drop</A>
    </ul>
  );
}
