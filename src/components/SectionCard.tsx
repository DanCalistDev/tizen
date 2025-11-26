import { h } from 'preact';
import MetricCard from './MetricCard';
import { Metric } from '../types';

interface SectionCardProps {
  title: string;
  metrics: Metric[];
}

function SectionCard(props: SectionCardProps) {
  return h('section', { class: 'section-card' },
    h('div', { class: 'section-header' },
      h('h2', null, props.title)
    ),
    h('div', { class: 'metrics-grid plano-grid' },
      props.metrics.map((metric: Metric, index: number) => {
        return h(MetricCard, {
          key: index,
          label: metric.label,
          value: metric.value,
          status: metric.status,
          highlight: metric.highlight
        });
      })
    )
  );
}

export default SectionCard;
