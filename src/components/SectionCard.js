import { h } from 'preact';
import MetricCard from './MetricCard';

function SectionCard(props) {
  return h('section', { class: 'section-card' },
    h('div', { class: 'section-header' },
      h('h2', null, props.title)
    ),
    h('div', { class: 'metrics-grid plano-grid' },
      props.metrics.map(function(metric, index) {
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
