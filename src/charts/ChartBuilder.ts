import Highcharts from "highcharts";

import { HierarchicalData } from "../models/HierarchicalData";
import { TrendingHierarchicalConfig } from "../models/TrendingHierarchicalConfig";
import { ColumnConfiguration, ColumnChartData } from "./Column.configuration";
import { HierarchicalDataMapper } from "./mappers/HierarchicalDataMapper";

type ApplicationData = HierarchicalData;

interface DataMapper {
  data: ApplicationData;
  toColumn(): ColumnChartData[];
}

export class ChartBuilder {
  public static FromHeirarchicalData(
    data: HierarchicalData,
    config: TrendingHierarchicalConfig,
    chartOptions: Highcharts.Options
  ) {
    return new ChartBuilder(
      new HierarchicalDataMapper(data, config),
      chartOptions
    );
  }

  private constructor(
    private mapper: DataMapper,
    public chartOptions: Highcharts.Options
  ) {}

  getColumnChart(): Highcharts.Options {
    const columnChartData = this.mapper.toColumn();
    const columnConfiguration = new ColumnConfiguration();

    const options = Highcharts.merge(
      columnConfiguration.defaultOptions,
      this.chartOptions
    );

    const series = columnConfiguration.buildSeries(columnChartData);
    options.series = series;
    return options;
  }
}
