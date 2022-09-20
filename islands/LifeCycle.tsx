import { Component } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface P {
  count: number;
}

interface S {
  count: number;
}

// deno-lint-ignore no-explicit-any
type Any = any;

export default class Island extends Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = { count: props.count };
  }

  componentWillMount() {
    console.log(1, "componentWillMount");
  }

  componentDidMount() {
    console.log(2, "componentDidMount");
  }

  componentWillUnmount() {
    console.log(3, "componentWillUnmount");
  }

  componentWillReceiveProps(nextProps: Readonly<P>, nextContext: Any) {
    console.log(4, "componentWillReceiveProps", nextProps, nextContext);
  }

  shouldComponentUpdate(
    nextProps: Readonly<P>,
    nextState: Readonly<S>,
    nextContext: Any,
  ) {
    console.log(5, "shouldComponentUpdate", nextProps, nextState, nextContext);
    return this.state.count !== nextState.count;
    // return false;
  }

  componentWillUpdate(
    nextProps: Readonly<P>,
    nextState: Readonly<S>,
    nextContext: Any,
  ) {
    console.log(6, "componentWillUpdate", nextProps, nextState, nextContext);
  }

  componentDidUpdate(
    previousProps: Readonly<P>,
    previousState: Readonly<S>,
    snapshot: Any,
  ) {
    console.log(
      7,
      "componentDidUpdate",
      previousProps,
      previousState,
      snapshot,
    );
  }

  render() {
    console.log("render");

    return (
      <div>
        <h1>Lifecycle</h1>
        <button
          onClick={() => this.setState((prev) => ({ count: prev.count + 1 }))}
          disabled={!IS_BROWSER}
        >
          Counter
        </button>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}
