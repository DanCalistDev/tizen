import { MetricStatus } from '../types';

interface MetricCardProps {
  label: string;
  value: string;
  status: MetricStatus;
  highlight?: boolean;
}

function MetricCard({ label, value, status, highlight }: MetricCardProps) {
  const classes = [
    'metric-card',
    `status-${status}`,
    highlight ? 'highlight' : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className="metric-label">{label}</div>
      <div className="metric-value">{value}</div>
    </div>
  );
}

export default MetricCard;
