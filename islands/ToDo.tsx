/** @jsx h */
import { Component, h } from "preact";
import CheckToDo from '../components/CheckToDo.tsx'

interface IToDo {
  done: boolean;
  text: string;
}

interface State {
  count: number;
  list: IToDo[];
  disabled: boolean;
}

// deno-lint-ignore ban-types
export default class ToDo extends Component<{}, State> {
  ul: HTMLUListElement | undefined | null;
  input!: HTMLInputElement;

  constructor() {
    super();

    const list = [
      { text: 'lean TypeScript', done: true },
      { text: 'build Stencil App', done: false },
    ];
    this.state = { count: 1, list: list, disabled: true };
  }

  count = () => this.state.list.reduce((sum, todo) => sum + (todo.done ? 0 : 1), 0);

  changeState = () => this.setState({
    disabled: !this.input.value,
    list: this.state.list,
    count: this.count()
  });

  onPurge = (ev: Event) => {
    ev.preventDefault();

    this.setState({
      disabled: !this.input.value,
      list: this.state.list.filter((todo) => !todo.done),
      count: this.count()
    });
  };

  onToDo = (n: number) => {
    this.state.list[n].done = !this.state.list[n].done;
    this.changeState();
  };

  onAdd = (ev: MouseEvent) => {
    ev.preventDefault();

    this.state.list.push({ text: this.input.value, done: false });
    this.input.value = '';
    this.changeState();
  };

  onInput = () => {
    this.changeState();
  };

  render() {
    return (
      <div class="todo">
        <h2>Todo</h2>
        <Purge count={this.state.count} list={this.state.list} onClick={this.onPurge} />
        <List count={this.state.count} list={this.state.list} onClick={this.onToDo} />
        <Form comp={this} />
      </div>
    );
  }
}

interface PurgeProps {
  count: number;
  list: IToDo[];
  onClick: (ev: Event) => void;
}

const Purge = (props: PurgeProps) => (
  <span>
    {props.count} of {props.list.length} remaining
    <button onClick={props.onClick}>
      purge
    </button>
  </span>
);

interface ListProps {
  count: number;
  list: IToDo[];
  onClick: (n: number) => void;
}

const List = (props: ListProps) => (
  <ul>
    {props.list.map((todo, n) => (
      <CheckToDo
        done={todo.done}
        text={todo.text}
        n={n}
        onClick={props.onClick}
      />
    ))}
  </ul>
);

const Form = ({ comp }: { comp: ToDo }) => (
  <form>
    <input
      type='text'
      size={30}
      placeholder='add new todo here'
      ref={(el) => (comp.input = el as HTMLInputElement)}
      onInput={comp.onInput}
    />
    <button onClick={comp.onAdd} disabled={comp.state.disabled}>add</button>
  </form>
);
