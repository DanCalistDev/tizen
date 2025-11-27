import { h } from 'preact';
import MetricCard from './MetricCard';
import { Metric } from '../types';

// Card com posição na coluna
interface GridCard extends Metric {
  col: number; // Coluna (1-22)
}

// Linha do grid
interface GridRow {
  title: string;
  cards: GridCard[];
}

// Dados do dashboard - cada card tem sua coluna definida
const gridData: GridRow[] = [
  {
    title: '', // Primeira linha sem título
    cards: [
      { col: 1, label: 'HIB CONG', value: '01/09', status: 'success' },
      { col: 2, label: 'CON TRATO', value: 'PREV 10/09', status: 'danger', highlight: true },
      { col: 3, label: 'KO INT', value: '05/09', status: 'success', hasArrowDown: true },
      { col: 4, label: 'KO EXT', value: '07/09', status: 'success', hasArrowDown: true },
      { col: 5, label: 'TIME LINE', value: '07/09', status: 'success', headerText: 'PLANO' },
      // SD - começa na coluna 8
      { col: 8, label: 'PLANO SD', value: '22/10', status: 'success' },
      { col: 9, label: 'BASES EMIT', value: '20/10 23/10', status: 'warning', highlight: true },
      { col: 10, label: 'RECEB SD', value: '31/10 02/11', status: 'warning' },
      { col: 11, label: 'APROV SD', value: 'PREV 05/11', status: 'success' },
      // INDICADORES - canto direito
      { col: 19, label: 'Satisf', value: '20/10', status: 'warning' },
      { col: 20, label: 'QSMS', value: '20/10', status: 'success' },
      { col: 21, label: 'EVOLUÇ OBRA', value: '45%', status: 'neutral' },
      { col: 22, label: 'DIAS PENDÊN', value: '123', status: 'neutral' },
    ]
  },
  {
    title: 'ARQUITETURA',
    cards: [
      { col: 6, label: 'PREMS TEC', value: '07/09', status: 'success' },
      { col: 7, label: 'TIME LINE', value: '07/09', status: 'success' },
      { col: 8, label: 'INSPEC OBRA', value: '10/09', status: 'success' },
      { col: 9, label: 'LEV FIS', value: '20/09 22/09', status: 'warning' },
      { col: 10, label: 'EP 1', value: '12/09 15/09', status: 'warning' },
      { col: 11, label: 'EP 2', value: '25/09 29/09', status: 'warning' },
      { col: 12, label: 'AP', value: '20/10', status: 'success' },
      { col: 13, label: 'PLANO SD', value: '20/10', status: 'success' },
      { col: 14, label: 'BASES EMIT.', value: '20/10 23/10', status: 'warning' },
      { col: 15, label: 'RECEB. SD', value: '31/10 02/11', status: 'warning' },
      { col: 16, label: 'APROV SD', value: 'PREV 05/11', status: 'danger', highlight: true }
    ]
  },
  {
    title: 'COMPRAS',
    cards: [
      { col: 6, label: 'SAF VALID', value: '07/09', status: 'success' },
      { col: 7, label: 'PLANO COMP', value: '07/09', status: 'success' },
      { col: 8, label: 'INSPEC OBRA', value: '10/09', status: 'success' },
      { col: 9, label: 'COMP 1', value: '20/09 22/09', status: 'warning' },
      { col: 10, label: 'COMP 2', value: '25/09', status: 'success' },
      { col: 11, label: 'COMP 3', value: '27/09', status: 'success' },
      { col: 12, label: 'COMP 4', value: 'PREV 12/10', status: 'danger', highlight: true },
      { col: 13, label: 'CMPT PROJ', value: 'PREV 12/10', status: 'danger', highlight: true },
      { col: 14, label: 'EX', value: '30/10', status: 'neutral' }
    ]
  },
  {
    title: 'PROJ. TÉCN',
    cards: [
      { col: 5, label: 'PJ TEC CONTR', value: '07/09', status: 'warning' },
      { col: 6, label: 'TIME LINE', value: '07/09', status: 'success' },
      { col: 7, label: 'INSPEC OBRA', value: '10/09', status: 'success' },
      { col: 8, label: 'KO TEC', value: '10/09', status: 'success' },
      { col: 9, label: 'ARQ BASES', value: '22/09 30/09', status: 'warning' },
      { col: 10, label: 'EP TEC', value: '30/09 02/10', status: 'warning' },
      { col: 11, label: 'REUN TEC', value: 'PREV 30/09', status: 'danger', highlight: true },
      { col: 12, label: 'AP TEC', value: 'PREV 05/10', status: 'danger', highlight: true },
      { col: 13, label: 'CMPT PROJ', value: 'PREV 12/10', status: 'danger', highlight: true },
      { col: 14, label: '1ª RN FORNEC', value: '12/10', status: 'neutral' },
      { col: 15, label: 'EX TEC', value: '02/11', status: 'neutral' }
    ]
  },
  {
    title: 'OBRA',
    cards: [
      { col: 4, label: 'MACRO OBRA', value: '10/09', status: 'neutral' },
      { col: 5, label: 'QSMS DOCS', value: '10/09', status: 'neutral' },
      { col: 6, label: 'PRJ DISPON', value: '30/09', status: 'neutral' },
      { col: 7, label: 'OBRA VISTOR', value: '30/09', status: 'neutral' },
      { col: 8, label: 'CRONO OBRA', value: '02/10', status: 'neutral' },
      { col: 9, label: 'PASS. OBRA', value: '05/10', status: 'neutral' },
      { col: 10, label: '1ª RN FORNEC', value: '10/10', status: 'neutral' },
      { col: 11, label: 'CANT. ALMOX', value: '15/10', status: 'neutral' },
      { col: 13, label: 'ETAPA 1', value: '12/11', status: 'neutral' },
      { col: 14, label: 'ETAPA 2', value: '22/11', status: 'neutral' },
      { col: 15, label: 'ETAPA 3', value: '02/12', status: 'neutral' },
      { col: 16, label: 'ETAPA 4', value: '12/12', status: 'neutral' },
      { col: 17, label: 'ETAPA 5', value: '15/12', status: 'neutral' },
      { col: 18, label: 'ETAPA 6', value: '18/12', status: 'neutral' },
      { col: 19, label: 'ETAPA 7', value: '20/12', status: 'neutral' },
      { col: 20, label: 'ETAPA 8', value: '23/01', status: 'neutral' }
    ]
  },
  {
    title: 'RECORRÊNCIAS',
    cards: [
      { col: 2, label: 'RGO', value: '20/10', status: 'success' },
      { col: 3, label: 'R.SEM CLIENTE', value: '22/09', status: 'success' },
      { col: 4, label: 'COM. SEM.', value: '22/09', status: 'success' },
      // ENCERRAMENTO - canto direito
      { col: 18, label: 'ACEITE PROV', value: '31/01', status: 'neutral' },
      { col: 19, label: 'EMISS BOOK', value: '04/02', status: 'neutral' },
      { col: 20, label: 'FECH. FINANC', value: '04/02', status: 'neutral' },
      { col: 21, label: 'ACEITE DEFIN', value: '05/02', status: 'neutral' }
    ]
  }
];

// Labels das seções especiais na primeira e última linha
const specialLabels = {
  firstRow: [
    { col: 1, span: 5, label: '' }, // Sem título
    { col: 8, span: 4, label: 'SD' },
    { col: 19, span: 4, label: 'INDICADORES' }
  ],
  lastRow: [
    { col: 1, span: 17, label: 'RECORRÊNCIAS' },
    { col: 18, span: 5, label: 'ENCERRAMENTO' }
  ]
};

const totalColumns = 22;

function App() {
  return h('div', { class: 'dashboard' },
    h('div', { class: 'grid-dashboard' },
      gridData.map((row, rowIndex) => {
        const isFirstRow = rowIndex === 0;
        const isLastRow = rowIndex === gridData.length - 1;

        return h('div', { class: 'grid-row', key: rowIndex },
          // Label da linha (coluna 0)
          isFirstRow ? (
            // Primeira linha: múltiplos labels
            h('div', { class: 'row-labels-multi' },
              specialLabels.firstRow.map((sl, i) =>
                h('div', {
                  class: `row-label-segment ${sl.label ? '' : 'empty'}`,
                  key: i
                }, sl.label)
              )
            )
          ) : isLastRow ? (
            // Última linha: labels divididos
            h('div', { class: 'row-labels-multi' },
              specialLabels.lastRow.map((sl, i) =>
                h('div', { class: 'row-label-segment', key: i }, sl.label)
              )
            )
          ) : (
            // Linhas normais
            h('div', { class: 'row-label' },
              h('span', null, row.title)
            )
          ),
          // Grid de 22 colunas
          h('div', { class: 'row-grid' },
            row.cards.map((card, cardIndex) => {
              return h('div', {
                class: 'grid-cell',
                style: `grid-column: ${card.col}`,
                key: cardIndex
              },
                h(MetricCard, {
                  label: card.label,
                  value: card.value,
                  status: card.status,
                  highlight: card.highlight,
                  headerText: card.headerText,
                  hasArrowDown: card.hasArrowDown
                })
              );
            })
          )
        );
      })
    )
  );
}

export default App;
