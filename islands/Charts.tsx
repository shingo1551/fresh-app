import { Component } from "preact";

// deno-lint-ignore no-var no-explicit-any
declare var ApexCharts: any;

export default class Island extends Component {

  div: HTMLDivElement | undefined | null;

  // deno-lint-ignore no-explicit-any
  chart: any;

  chartRender() {
    const options = {
      chart: {
        type: 'line',
      },
      series: [
        {
          name: 'sales',
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
        },
      ],
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    };

    this.chart = new ApexCharts(this.div, options);
    this.chart.render();
  }

  componentDidMount() {
    this.chartRender();
  }

  render() {
    return <div class="charts" ref={elm => this.div = elm}></div>;
  }
}
