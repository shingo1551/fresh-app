/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import SimpleList from "../components/SimpleList.tsx";

export default function DragAndDrop() {
  return (
    <>
      <h1>Drag and Drop</h1>
      <SimpleList titleText="yet" group="g1">
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </SimpleList>
      <SimpleList titleText="done" group="g1">
        <li>item 4</li>
        <li>item 5</li>
        <li>item 6</li>
      </SimpleList>
    </>
  );
}
