export type MetricStatus = 'success' | 'warning' | 'danger' | 'neutral';

export interface Metric {
  label: string;
  value: string;
  status: MetricStatus;
  highlight?: boolean;
}

export interface Section {
  title: string;
  metrics: Metric[];
}
