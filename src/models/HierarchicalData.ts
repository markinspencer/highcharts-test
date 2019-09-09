import { ChartProperty } from "./TrendingHierarchicalConfig";
export class HierarchicalData {
  activeHierarchy: Hierarchy;
  breadcrumbs: DataLevel[];
  currentDataLevel: CurrentDataLevel;

  constructor(
    hierarchy: Hierarchy,
    breadCrumbs: DataLevel[],
    currentDataLevel: CurrentDataLevel
  ) {
    this.activeHierarchy = hierarchy;
    this.breadcrumbs = breadCrumbs;
    this.currentDataLevel = currentDataLevel;
  }
}

//Hierarchy
export interface Hierarchy {
  name: string;
  levels: HierarchyLevel[];
}

export interface HierarchyLevel {
  level: number;
  detail: ConfigurationField | ChartProperty;
}

export interface ConfigurationField {
  friendlyName: string;
  id: string;
  propertyName: string;
}

//Breadcrumbs
export interface DataLevel {
  hierarchyLevel: HierarchyLevel;
  data: DataLevelData;
}

export interface DataLevelData {
  name: string;
  levelName: string;
  totals: { [key: string]: number };
  percentages: { [key: string]: number };
}

export interface CurrentDataLevel {
  hierarchyLevel: HierarchyLevel;
  data: any;
}
