import { ColumnChartData } from "./../Column.configuration";
import { HierarchicalData } from "../../models/HierarchicalData";
import { TrendingHierarchicalConfig } from "../../models/TrendingHierarchicalConfig";

export class HierarchicalDataMapper {
  constructor(
    public data: HierarchicalData,
    public config: TrendingHierarchicalConfig
  ) {}

  toColumn = () => {
    const { propertyName } = this.data.currentDataLevel.hierarchyLevel.detail;
    const { propertyName: categoryField } = this.config.trendField;
    const { propertyName: valueField } = this.config.valueFields[0];
    const { data } = this.data.currentDataLevel;

    const columnChartData = data.map((item: any) => {
      return {
        series: item[propertyName],
        category: item[categoryField],
        value: item[valueField]
      } as ColumnChartData;
    });

    return columnChartData;
  };
}
