import { h } from 'preact';
import { MetricStatus } from '../types';

interface MetricCardProps {
  label: string;
  value: string;
  status: MetricStatus;
  highlight?: boolean;
  headerText?: string;
  hasArrowDown?: boolean;
}

function MetricCard(props: MetricCardProps) {
  let classes = 'metric-card';

  if (props.status === 'success') {
    classes += ' status-success';
  } else if (props.status === 'warning') {
    classes += ' status-warning';
  } else if (props.status === 'danger') {
    classes += ' status-danger';
  } else if (props.status === 'neutral') {
    classes += ' status-neutral';
  }

  if (props.highlight) {
    classes += ' highlight';
  }

  return h('div', { class: 'metric-card-wrapper' },
    props.headerText ? h('div', { class: 'metric-header-text' }, props.headerText) : null,
    h('div', { class: classes },
      h('div', { class: 'metric-label' }, props.label),
      h('div', { class: 'metric-value' }, props.value)
    ),
    props.hasArrowDown ? h('div', { class: 'arrow-down' }, '↓') : null
  );
}

export default MetricCard;
