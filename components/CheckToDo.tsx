import { Component } from "preact";

interface Props {
  done: boolean;
  text: string;
  n: number;
  onClick: (n: number) => void;
}

export default class CheckToDo extends Component<Props> {
  componentWillMount() {
    console.log(1, "componentWillMount");
  }

  componentDidMount() {
    console.log(2, "componentDidMount");
  }

  componentWillUnmount() {
    console.log(3, "componentWillUnmount");
  }

  componentWillReceiveProps(nextProps: Readonly<Props>) {
    console.log(4, "componentWillReceiveProps", nextProps);
  }

  shouldComponentUpdate(nextProps: Readonly<Props>) {
    console.log(5, "shouldComponentUpdate", nextProps, this.props);
    return this.props.done !== nextProps.done;
  }

  componentWillUpdate(nextProps: Readonly<Props>) {
    console.log(6, "componentWillUpdate", nextProps);
  }

  componentDidUpdate(previousProps: Readonly<Props>) {
    console.log(7, "componentDidUpdate", previousProps);
  }

  render() {
    console.log("render", this.props);

    const props = this.props;
    return (
      <li>
        <label class="checkbox">
          <input
            type="checkbox"
            checked={props.done}
            onClick={() => props.onClick(props.n)}
          />
          <span class={props.done ? "done" : undefined}>{props.text}</span>
        </label>
      </li>
    );
  }
}
