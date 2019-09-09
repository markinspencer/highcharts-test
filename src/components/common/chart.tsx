import React, { Component, RefObject } from "react";
import Highcharts from "highcharts";

export interface Props {
  chartOptions: Highcharts.Options;
}

export interface State {
  options: Highcharts.Options;
}

class Chart extends Component<Props, State> {
  container: RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);

    this.container = React.createRef<HTMLDivElement>();
    const { chartOptions } = props;

    this.state = {
      options: chartOptions
    };
  }

  componentDidMount() {
    const { current: element } = this.container;
    const { options } = this.state;

    if (element) {
      Highcharts.chart(element, options);
    }
  }

  render() {
    return <div style={{ height: 300, width: 300 }} ref={this.container}></div>;
  }
}

export default Chart;
