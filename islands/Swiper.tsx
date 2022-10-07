import { Component, createRef } from "preact";
import { debounce } from "https://deno.land/std@0.159.0/async/mod.ts";

const colors = ["red", "green", "blue", "yellow", "pink", "black"];
const colors2 = [...colors, ...colors, ...colors];
const w = 500;

export default class Island extends Component {
  t = 0;
  future = 6;
  div = createRef();

  startScrool = () => {
    this.t = setInterval(() => {
      this.div.current?.scroll({
        left: (this.future + 1) * w,
        behavior: "smooth",
      });

      if (5 < this.future && this.future < 11) {
        this.future = this.future + 1;
      } else {
        const n = 10 < this.future ? this.future - 5 : this.future + 7;
        setTimeout(() => {
          this.div.current!.scrollLeft = w * n;
        }, 1000);
        this.future = n;
      }
    }, 5000);
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
    this.future = n;
  };

  render() {
    return (
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
    );
  }
}
