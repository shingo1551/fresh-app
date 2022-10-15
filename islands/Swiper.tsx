import { IS_BROWSER } from "$fresh/runtime.ts";
import { Component, createRef } from "preact";
import { debounce } from "https://deno.land/std@0.159.0/async/mod.ts";

const colors = ["red", "green", "blue", "yellow", "pink", "black"];
const colors2 = [...colors, ...colors, ...colors];
const w = 500;

interface State {
  feature: number;
}

// deno-lint-ignore ban-types
export default class Island extends Component<{}, State> {
  t = 0;
  div = createRef();

  constructor() {
    super();
    this.setState({ feature: 6 })
  }

  startScrool = () => {
    this.t = setInterval(() => {
      this.div.current?.scroll({
        left: (this.state.feature + 1) * w,
        behavior: "smooth",
      });

      if (5 < this.state.feature && this.state.feature < 11) {
        this.setState({ feature: this.state.feature + 1 });
      } else {
        const n = 10 < this.state.feature ? this.state.feature - 5 : this.state.feature + 7;
        setTimeout(() => {
          this.div.current!.scrollLeft = w * n;
        }, 1000);
        this.setState({ feature: n });
      }
    }, 3000);
    console.log("startScrool", this.t);
  };

  clearInterval = () => {
    console.log("clearInterval", this.t);
    clearInterval(this.t);
  };

  componentDidMount() {
    this.div.current!.scrollLeft = w * 6;
    this.startScrool();
  }

  componentWillUnmount() {
    this.clearInterval();
  }

  onPointerEnter = (e: PointerEvent) => {
    console.log(e.type);
    this.clearInterval();
  };

  onPointerLeave = (e: PointerEvent) => {
    console.log(e.type);
    this.startScrool();
  };

  onScroll = (e: Event) => {
    const n = Math.ceil(this.div.current!.scrollLeft / w);
    console.log(this.div.current!.scrollLeft, n, colors2[n]);
    this.div.current?.scroll({ left: n * w, behavior: "smooth" });
    this.setState({ feature: n });
  };

  render() {
    if (IS_BROWSER)
      console.log(window.screen.width);
    return (
      <>
        <div
          style="width: 500px; overflow-x: auto;"
          ref={this.div}
          onPointerEnter={this.onPointerEnter}
          onPointerLeave={this.onPointerLeave}
          onScroll={debounce(this.onScroll, 500)}
        >
          <div style="display: flex; flex-direction: row; width: 9000px">
            {colors2.map((color) => (
              <div
                style={`width:${w}px; height:100px; color:gray; background-color:${color};`}
              >
                {color}
              </div>
            ))}
          </div>
        </div>
        <p>{this.state.feature}</p>
      </>
    );
  }
}
