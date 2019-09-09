import {
  TrendingHierarchicalConfig,
  FieldDataType,
  VisualizationValueField
} from "./../models/TrendingHierarchicalConfig";
import {
  HierarchicalData,
  Hierarchy,
  DataLevel,
  CurrentDataLevel,
  HierarchyLevel
} from "./../models/HierarchicalData";

export const getExpenseData = () => {
  const hierarchy: Hierarchy = {
    name: "Main",
    levels: [
      {
        level: 1,
        detail: {
          friendlyName: "Category",
          id: "7c1518af-5016-431a-b751-ef2dd3ddaaae",
          propertyName: "ID305_ID5893_ID342_GLCategoryDescription"
        }
      }
    ]
  };

  const breadcrumbs: DataLevel[] = [
    {
      data: {
        levelName: "Summary",
        name: "Victoria Capital Projects",
        percentages: { Amount: 1 },
        totals: { Amount: 237000 }
      },
      hierarchyLevel: {
        level: 1,
        detail: {
          id: "7c1518af-5016-431a-b751-ef2dd3ddaaae",
          propertyName: "ID305_ID5893_ID342_GLCategoryDescription",
          friendlyName: "Category"
        }
      }
    }
  ];

  const current: CurrentDataLevel = {
    hierarchyLevel: {
      level: 1,
      detail: {
        id: "7c1518af-5016-431a-b751-ef2dd3ddaaae",
        propertyName: "ID305_ID5893_ID342_GLCategoryDescription",
        friendlyName: "Category"
      }
    },
    data: [
      {
        ID305_ID5893_ID342_GLCategoryDescription: "Contracted Services",
        ForecastYear: 2018,
        Amount: 100000,
        AmountPercentageOfOverallTotal: 0.4219409282700422,
        AmountPercentage: 0.4219409282700422
      },
      {
        ID305_ID5893_ID342_GLCategoryDescription: "Contracted Services",
        ForecastYear: 2015,
        Amount: 50000,
        AmountPercentageOfOverallTotal: 0.2109704641350211,
        AmountPercentage: 0.2109704641350211
      },
      {
        ID305_ID5893_ID342_GLCategoryDescription: "Contracted Services",
        ForecastYear: 2016,
        Amount: 47000,
        AmountPercentageOfOverallTotal: 0.19831223628691982,
        AmountPercentage: 0.19831223628691982
      },
      {
        ID305_ID5893_ID342_GLCategoryDescription: "Contracted Services",
        ForecastYear: 2017,
        Amount: 40000,
        AmountPercentageOfOverallTotal: 0.16877637130801687,
        AmountPercentage: 0.16877637130801687
      },
      {
        ID305_ID5893_ID342_GLCategoryDescription: "Material & Supplies",
        ForecastYear: 2017,
        Amount: 0,
        AmountPercentageOfOverallTotal: 0,
        AmountPercentage: 0
      },
      {
        ID305_ID5893_ID342_GLCategoryDescription: "Equipment",
        ForecastYear: 2016,
        Amount: 0,
        AmountPercentageOfOverallTotal: 0,
        AmountPercentage: 0
      },
      {
        ID305_ID5893_ID342_GLCategoryDescription: "Salaries and Benefits",
        ForecastYear: 2016,
        Amount: 0,
        AmountPercentageOfOverallTotal: 0,
        AmountPercentage: 0
      },
      {
        ID305_ID5893_ID342_GLCategoryDescription: "Equipment",
        ForecastYear: 2015,
        Amount: 0,
        AmountPercentageOfOverallTotal: 0,
        AmountPercentage: 0
      },
      {
        ID305_ID5893_ID342_GLCategoryDescription: "Salaries and Benefits",
        ForecastYear: 2015,
        Amount: 0,
        AmountPercentageOfOverallTotal: 0,
        AmountPercentage: 0
      }
    ]
  };

  return new HierarchicalData(hierarchy, breadcrumbs, current);
};

export const getExpenseConfig = () => {
  const defaultHierarchy: Hierarchy = {
    name: "Main",
    levels: [
      {
        level: 1,
        detail: {
          fieldDataType: FieldDataType.String,
          friendlyName: "Category",
          id: "23e876bc-604b-4234-8801-66fab573bd02",
          propertyName: "ID305_ID5893_ID342_GLCategoryDescription"
        }
      }
    ]
  };

  const defaultHierarchyLevel: HierarchyLevel = {
    level: 1,
    detail: {
      fieldDataType: 0,
      friendlyName: "Category",
      id: "23e876bc-604b-4234-8801-66fab573bd02",
      propertyName: "ID305_ID5893_ID342_GLCategoryDescription"
    }
  };

  const hierarchies: Hierarchy[] = [
    {
      levels: [
        {
          detail: {
            fieldDataType: FieldDataType.String,
            friendlyName: "Category",
            id: "23e876bc-604b-4234-8801-66fab573bd02",
            propertyName: "ID305_ID5893_ID342_GLCategoryDescription"
          },
          level: 1
        }
      ],
      name: "Main"
    }
  ];

  const trendField = {
    fieldDataType: 2,
    friendlyName: "Year",
    id: "c99c3b8d-268b-4b20-9300-a6f329809d24",
    propertyName: "ForecastYear"
  };

  const valueFields: VisualizationValueField[] = [
    {
      fieldDataType: 1,
      fieldUnitOfMeasure: 2,
      friendlyName: "Budget",
      id: "dba70bd5-4fc8-46fa-bca4-e8419a7f8c08",
      ordinal: 0,
      propertyName: "Amount"
    }
  ];

  return {
    datasetId: "cbd02fe4-290b-434e-b7a7-1e7e18e9bdf7",
    defaultHierarchy,
    defaultHierarchyLevel,
    defaultHierarchyName: "Main",
    hierarchies,
    includeCount: false,
    trendField,
    valueFields
  } as TrendingHierarchicalConfig;
};
