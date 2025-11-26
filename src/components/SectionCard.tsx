import MetricCard from './MetricCard';
import { Metric } from '../types';

interface SectionCardProps {
  title: string;
  metrics: Metric[];
}

function SectionCard({ title, metrics }: SectionCardProps) {
  return (
    <section className="section-card">
      <div className="section-header">
        <h2>{title}</h2>
      </div>
      <div className="metrics-grid plano-grid">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            label={metric.label}
            value={metric.value}
            status={metric.status}
            highlight={metric.highlight}
          />
        ))}
      </div>
    </section>
  );
}

export default SectionCard;
