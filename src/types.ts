export type MetricStatus = 'success' | 'warning' | 'danger' | 'neutral';

export interface Metric {
  label: string;
  value: string;
  status: MetricStatus;
  highlight?: boolean;
  headerText?: string;
  hasArrowDown?: boolean;
  isTitle?: boolean;
}

export interface Section {
  title: string;
  metrics: Metric[];
  startColumn?: number;
}
