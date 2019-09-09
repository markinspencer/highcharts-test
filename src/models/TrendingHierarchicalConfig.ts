import { Hierarchy, HierarchyLevel } from "./HierarchicalData";

interface Configuration {
  id: string;
  datasetId: string;
}

interface HierarchicalConfiguration extends Configuration {
  valueFields: VisualizationValueField[];
  includeCount: boolean;

  hierarchies: Hierarchy[];
  defaultHierarchy: Hierarchy;
  defaultHierarchyName: string;
  defaultHierarchyLevel: HierarchyLevel;
}

export interface TrendingHierarchicalConfig extends HierarchicalConfiguration {
  trendField: ChartProperty;
}

export interface ChartProperty {
  id: string;
  propertyName: string;
  friendlyName: string;
  fieldDataType: FieldDataType;
}

export interface VisualizationValueField {
  id: string;
  propertyName: string;
  friendlyName: string;
  ordinal: number;
  fieldDataType: FieldDataType;
  fieldUnitOfMeasure?: FieldUnitOfMeasure;
  fieldUserDefinedUoM?: string;

  // UI only
  //format: IFieldFormat;
}

export enum FieldDataType {
  String = 0,
  Number = 1,
  Integer = 2,
  Date = 3,
  Boolean = 4,
  LongString = 5,
  Latitude = 6,
  Longitude = 7,
  Address = 8,
  GeoJson = 9
}

export enum FieldUnitOfMeasure {
  NotApplicable = 1,
  Dollars = 2,
  UserDefined = 3
}

export interface IFieldFormat {
  id: string;
}
