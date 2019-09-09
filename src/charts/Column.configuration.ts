export interface ColumnChartData {
  series: string;
  value: number;
  category: number;
}

type DataPoint = [number | string, number];

export class ColumnConfiguration {
  buildSeries(data: ColumnChartData[]): Highcharts.SeriesColumnOptions[] {
    const lookup = data.reduce((lookup: any, item: ColumnChartData) => {
      const { category, series: name, value } = item;

      if (!lookup[name]) {
        lookup[name] = {
          type: "column",
          name,
          data: []
        };
      }

      const point: DataPoint = [category, value];
      lookup[name].data.push(point);

      return lookup;
    }, {});

    return Object.values(lookup);
  }

  defaultOptions = {
    chart: {
      type: "column"
    },
    title: {
      text: ""
    },
    yAxis: {
      min: 0,
      title: {
        text: ""
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: "bold",
          color: "gray"
        }
      }
    },
    legend: {
      align: "right",
      x: -30,
      verticalAlign: "top",
      y: 25,
      floating: true,
      backgroundColor: "white",
      borderColor: "#CCC",
      borderWidth: 1,
      shadow: false
    },
    tooltip: {
      headerFormat: "<b>{point.x}</b><br/>",
      pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}"
    },
    plotOptions: {
      column: {
        stacking: "normal",
        dataLabels: {
          enabled: true
        }
      }
    },
    series: [] as Highcharts.SeriesColumnOptions[]
  } as Highcharts.Options;
}
