/** @jsx h */
import { h } from "preact";
import A from '../components/A.tsx';

export default function Island() {
  function onClick(e: Event) {
    e.preventDefault();
    location.href = '/hello/clicked';
  }

  return (
    <ul class="menu">
      <A href='/hello'>Hello</A>
      <A href='/hello/abc'>Hello ABC</A>

      <A href='/hello/clicked' onClick={onClick}>Click me!</A>

      <A href='/lifecycle'>Life Cycle</A>
      <A href='/todo'>ToDo</A>

      <A href='/chart'>Chart</A>

      <A href='/draganddrop'>Drag and Drop</A>
    </ul>
  );
}
