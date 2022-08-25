/** @jsx h */
/** @jsxFrag Fragment */
import { Component, ComponentChildren, Fragment, h } from "preact";

// deno-lint-ignore no-var no-explicit-any
declare var Sortable: any;

interface Props {
  titleText: string;
  group: string;
  children: ComponentChildren;
}

export default class SimpleList extends Component<Props> {
  ul: HTMLUListElement | undefined | null;

  componentDidMount() {
    Sortable.create(this.ul, {
      animation: 150,
      group: this.props.group,
    });
  }

  render() {
    return (
      <>
        <h4>{this.props.titleText}</h4>
        <ul ref={elm => this.ul = elm}>
          {this.props.children}
        </ul>
      </>
    );
  }
}
