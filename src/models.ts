export interface ConfigurationField {
  propertyName: string;
  friendlyName: string;
}

export interface HierarchyLevel {
  level: number;
  detail: ConfigurationField;
}

export interface Hierarchy {
  name: string;
  levels: HierarchyLevel;
}

export interface DataLevel {}

export interface HierarchicalConfigurationData {
  hierarchy: Hierarchy;
}
