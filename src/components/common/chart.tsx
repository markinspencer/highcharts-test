import React, { Component, RefObject } from "react";
import Highcharts, { SeriesColumnOptions } from "highcharts";

export interface Props extends Highcharts.Options {}

export interface State {
  options: Highcharts.Options;
}

class Chart extends Component<Props, State> {
  container: RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);
    this.container = React.createRef<HTMLDivElement>();
  }

  state: State = {};

  componentDidMount() {
    const { current: element } = this.container;

    if (element) {
      Highcharts.chart(element, this.state.options as Highcharts.Options);
    }
  }

  render() {
    return <div ref={this.container}></div>;
  }
}

export default Chart;
