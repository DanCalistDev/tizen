import { h } from 'preact';
import MetricCard from './MetricCard';
import { Section, Metric } from '../types';

interface HeaderBlock {
  title: string;
  metrics: Metric[];
  arrowMetrics?: Metric[];
}

// Primeira linha: 3 blocos (igual à última linha, mas com 3)
const firstRowBlocks: HeaderBlock[] = [
  {
    title: '', // Sem título
    metrics: [
      { label: 'HIB CONG', value: '01/09', status: 'success' },
      { label: 'CON TRATO', value: 'PREV 10/09', status: 'danger', highlight: true },
      { label: 'KO INT', value: '05/09', status: 'success', hasArrowDown: true },
      { label: 'KO EXT', value: '07/09', status: 'success', hasArrowDown: true },
      { label: 'TIME LINE', value: '07/09', status: 'success', headerText: 'PLANO' },
    ]
  },
  {
    title: 'SD',
    metrics: [
      { label: 'PLANO SD', value: '22/10', status: 'success' },
      { label: 'BASES EMIT', value: '20/10 23/10', status: 'warning', highlight: true },
    ],
    arrowMetrics: [
      { label: 'RECEB SD', value: '31/10 02/11', status: 'warning' },
      { label: 'APROV SD', value: 'PREV 05/11', status: 'success' },
    ]
  },
  {
    title: 'INDICADORES',
    metrics: [
      { label: 'Satisf', value: '20/10', status: 'warning' },
      { label: 'QSMS', value: '20/10', status: 'success' },
      { label: 'EVOLUÇ OBRA', value: '45%', status: 'neutral' },
      { label: 'DIAS PENDÊN', value: '123', status: 'neutral' }
    ]
  }
];

// Linhas do meio (4 linhas)
const dashboardData: Section[] = [
  {
    title: 'ARQUITETURA',
    startColumn: 4, // Começa na coluna 4 (alinhado com KO EXT)
    metrics: [
      { label: 'PREMS TEC', value: '07/09', status: 'success' },
      { label: 'TIME LINE', value: '07/09', status: 'success' },
      { label: 'INSPEC OBRA', value: '10/09', status: 'success' },
      { label: 'LEV FIS', value: '20/09 22/09', status: 'warning' },
      { label: 'EP 1', value: '12/09 15/09', status: 'warning' },
      { label: 'EP 2', value: '25/09 29/09', status: 'warning' },
      { label: 'AP', value: '20/10', status: 'success' },
      { label: 'PLANO SD', value: '20/10', status: 'success' },
      { label: 'BASES EMIT.', value: '20/10 23/10', status: 'warning' },
      { label: 'RECEB. SD', value: '31/10 02/11', status: 'warning' },
      { label: 'APROV SD', value: 'PREV 05/11', status: 'danger', highlight: true }
    ]
  },
  {
    title: 'COMPRAS',
    metrics: [
      { label: 'SAF VALID', value: '07/09', status: 'success' },
      { label: 'PLANO COMP', value: '07/09', status: 'success' },
      { label: 'INSPEC OBRA', value: '10/09', status: 'success' },
      { label: 'COMP 1', value: '20/09 22/09', status: 'warning' },
      { label: 'COMP 2', value: '25/09', status: 'success' },
      { label: 'COMP 3', value: '27/09', status: 'success' },
      { label: 'COMP 4', value: 'PREV 12/10', status: 'danger', highlight: true },
      { label: 'CMPT PROJ', value: 'PREV 12/10', status: 'danger', highlight: true },
      { label: 'EX', value: '30/10', status: 'neutral' }
    ]
  },
  {
    title: 'PROJ. TÉCN',
    startColumn: 3, // Começa na coluna 3 (alinhado com KO INT)
    metrics: [
      { label: 'PJ TEC CONTR', value: '07/09', status: 'warning' },
      { label: 'TIME LINE', value: '07/09', status: 'success' },
      { label: 'INSPEC OBRA', value: '10/09', status: 'success' },
      { label: 'KO TEC', value: '10/09', status: 'success' },
      { label: 'ARQ BASES', value: '22/09 30/09', status: 'warning' },
      { label: 'EP TEC', value: '30/09 02/10', status: 'warning' },
      { label: 'REUN TEC', value: 'PREV 30/09', status: 'danger', highlight: true },
      { label: 'AP TEC', value: 'PREV 05/10', status: 'danger', highlight: true },
      { label: 'CMPT PROJ', value: 'PREV 12/10', status: 'danger', highlight: true },
      { label: '1ª RN FORNEC', value: '12/10', status: 'neutral' },
      { label: 'EX TEC', value: '02/11', status: 'neutral' }
    ]
  },
  {
    title: 'OBRA',
    metrics: [
      { label: 'MACRO OBRA', value: '10/09', status: 'neutral' },
      { label: 'QSMS DOCS', value: '10/09', status: 'neutral' },
      { label: 'PRJ DISPON', value: '30/09', status: 'neutral' },
      { label: 'OBRA VISTOR', value: '30/09', status: 'neutral' },
      { label: 'CRONO OBRA', value: '02/10', status: 'neutral' },
      { label: 'PASS. OBRA', value: '05/10', status: 'neutral' },
      { label: 'ETAPA 1', value: '12/11', status: 'neutral' },
      { label: 'ETAPA 2', value: '22/11', status: 'neutral' },
      { label: 'ETAPA 3', value: '02/12', status: 'neutral' },
      { label: 'ETAPA 4', value: '12/12', status: 'neutral' },
      { label: 'ETAPA 5', value: '15/12', status: 'neutral' },
      { label: 'ETAPA 6', value: '18/12', status: 'neutral' },
      { label: 'ETAPA 7', value: '20/12', status: 'neutral' },
      { label: 'ETAPA 8', value: '22/12', status: 'neutral' },
      { label: 'ETAPA 9', value: '25/12', status: 'neutral' },
      { label: 'ETAPA 10', value: '28/12', status: 'neutral' },
      { label: 'ETAPA 11', value: '30/12', status: 'neutral' },
      { label: 'ETAPA 12', value: '02/01', status: 'neutral' },
      { label: 'ETAPA 13', value: '05/01', status: 'neutral' },
      { label: 'ETAPA 14', value: '08/01', status: 'neutral' },
      { label: 'ETAPA 15', value: '10/01', status: 'neutral' },
      { label: 'ETAPA 16', value: '12/01', status: 'neutral' }
    ]
  }
];

// Última linha dividida: RECORRÊNCIAS | ENCERRAMENTO
const lastRowSections: HeaderBlock[] = [
  {
    title: 'RECORRÊNCIAS',
    metrics: [
      { label: 'RGO', value: '20/10', status: 'success' },
      { label: 'R.SEM CLIENTE', value: '22/09', status: 'success' },
      { label: 'COM. SEM.', value: '22/09', status: 'success' }
    ]
  },
  {
    title: 'ENCERRAMENTO',
    metrics: [
      { label: 'ACEITE PROV', value: '31/01', status: 'neutral' },
      { label: 'EMISS BOOK', value: '04/02', status: 'neutral' },
      { label: 'FECH. FINANC', value: '04/02', status: 'neutral' },
      { label: 'ACEITE DEFIN', value: '05/02', status: 'neutral' }
    ]
  }
];

// Número fixo de colunas (baseado em OBRA com 22 cards)
const maxColumns = 22;

function App() {
  return h('div', { class: 'dashboard' },
    h('div', { class: 'flowchart' },
      // Primeira linha: 3 blocos (igual à última, mas com 3)
      h('div', { class: 'swimlane swimlane-triple' },
        firstRowBlocks.map((block, bIndex) => {
          const hasArrow = block.arrowMetrics && block.arrowMetrics.length > 0;
          const totalCards = block.metrics.length + (block.arrowMetrics ? block.arrowMetrics.length + 1 : 0);
          return h('div', { class: 'swimlane-third', key: bIndex },
            block.title ? h('div', { class: 'swimlane-label' },
              h('span', null, block.title)
            ) : h('div', { class: 'swimlane-label swimlane-label-empty' }),
            h('div', {
              class: 'swimlane-cards',
              style: `grid-template-columns: repeat(${totalCards}, 1fr)`
            },
              block.metrics.map((metric, mIndex) => {
                return h(MetricCard, {
                  key: mIndex,
                  label: metric.label,
                  value: metric.value,
                  status: metric.status,
                  highlight: metric.highlight,
                  headerText: metric.headerText,
                  hasArrowDown: metric.hasArrowDown
                });
              }),
              hasArrow ? h('div', { class: 'arrow' }, '→') : null,
              hasArrow ? block.arrowMetrics!.map((metric, mIndex) => {
                return h(MetricCard, {
                  key: `arrow-${mIndex}`,
                  label: metric.label,
                  value: metric.value,
                  status: metric.status,
                  highlight: metric.highlight
                });
              }) : null
            )
          );
        })
      ),
      // Linhas do meio (4 linhas)
      dashboardData.map((section: Section, index: number) => {
        const emptySlots = section.startColumn ? section.startColumn - 1 : 0;
        return h('div', { class: 'swimlane', key: index },
          h('div', { class: 'swimlane-label' },
            h('span', null, section.title)
          ),
          h('div', {
            class: 'swimlane-cards',
            style: `grid-template-columns: repeat(${maxColumns}, 1fr)`
          },
            // Espaços vazios antes dos cards
            Array.from({ length: emptySlots }).map((_, i) => {
              return h('div', { class: 'empty-slot', key: `empty-${i}` });
            }),
            section.metrics.map((metric, mIndex) => {
              return h(MetricCard, {
                key: mIndex,
                label: metric.label,
                value: metric.value,
                status: metric.status,
                highlight: metric.highlight,
                headerText: metric.headerText,
                hasArrowDown: metric.hasArrowDown
              });
            })
          )
        );
      }),
      // Última linha dividida (RECORRÊNCIAS | ENCERRAMENTO)
      h('div', { class: 'swimlane swimlane-split' },
        lastRowSections.map((section, sIndex) => {
          return h('div', { class: 'swimlane-half', key: sIndex },
            h('div', { class: 'swimlane-label' },
              h('span', null, section.title)
            ),
            h('div', {
              class: 'swimlane-cards',
              style: `grid-template-columns: repeat(${Math.floor(maxColumns / 2)}, 1fr)`
            },
              section.metrics.map((metric, mIndex) => {
                return h(MetricCard, {
                  key: mIndex,
                  label: metric.label,
                  value: metric.value,
                  status: metric.status,
                  highlight: metric.highlight
                });
              })
            )
          );
        })
      )
    )
  );
}

export default App;
