import * as React from "react";
import Chart from "./common/Chart";
import Highcharts from "highcharts";
import { getExpenseData, getExpenseConfig } from "../services/expense.service";
import { HierarchicalData } from "../models/HierarchicalData";
import { ChartBuilder } from "../charts/ChartBuilder";
import { TrendingHierarchicalConfig } from "../models/TrendingHierarchicalConfig";
export interface Props {}

export interface State {
  data: HierarchicalData;
  config: TrendingHierarchicalConfig;
  options: Highcharts.Options;
}

class Expense extends React.Component<Props, State> {
  state: State = {
    data: getExpenseData(),
    config: getExpenseConfig(),
    options: {}
  };

  componentDidMount() {
    const { data, config } = this.state;
    const chartBuilder = ChartBuilder.FromHeirarchicalData(data, config, {});
    const options = chartBuilder.getColumnChart();

    this.setState({
      options
    });
  }

  render() {
    const { options } = this.state;
    console.log(options);
    if (Object.keys(options).length < 1) {
      return <div> No Data to Display </div>;
    }
    return <Chart chartOptions={options}></Chart>;
  }
}

export default Expense;
