/** @jsx h */
import { h } from "preact";
import A from '../components/A.tsx';

export default function Menu() {
  function onClick(e: Event) {
    e.preventDefault();

    // deno-lint-ignore no-explicit-any
    (window.location as any) = '/hello/clicked';
  }

  return (
    <ul class="menu">
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
