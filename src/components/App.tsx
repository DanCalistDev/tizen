import SectionCard from './SectionCard';
import { Section } from '../types';

// Dados do dashboard - você pode modificar aqui ou buscar de uma API
const dashboardData: Section[] = [
  {
    title: 'Plano',
    metrics: [
      { label: 'HB CONG', value: '83/89', status: 'success' },
      { label: 'CCR EXT', value: '42/67', status: 'warning', highlight: true },
      { label: 'KO INT', value: '64/86', status: 'success' },
      { label: 'KO EXT', value: '67/89', status: 'success' },
      { label: 'TIME LINE', value: '87/89', status: 'success' }
    ]
  },
  {
    title: 'Plano 2',
    metrics: [
      { label: 'HB CONG', value: '83/89', status: 'success' },
      { label: 'CCR EXT', value: '42/67', status: 'warning', highlight: true },
      { label: 'KO INT', value: '64/86', status: 'success' },
      { label: 'KO EXT', value: '67/89', status: 'success' },
      { label: 'TIME LINE', value: '87/89', status: 'success' }
    ]
  },
  {
    title: 'Plano 3',
    metrics: [
      { label: 'HB CONG', value: '83/89', status: 'success' },
      { label: 'CCR EXT', value: '42/67', status: 'warning', highlight: true },
      { label: 'KO INT', value: '64/86', status: 'success' },
      { label: 'KO EXT', value: '67/89', status: 'success' },
      { label: 'TIME LINE', value: '87/89', status: 'success' }
    ]
  },
  {
    title: 'Plano 4',
    metrics: [
      { label: 'HB CONG', value: '83/89', status: 'success' },
      { label: 'CCR EXT', value: '42/67', status: 'warning', highlight: true },
      { label: 'KO INT', value: '64/86', status: 'success' },
      { label: 'KO EXT', value: '67/89', status: 'success' },
      { label: 'TIME LINE', value: '87/89', status: 'success' }
    ]
  },
  {
    title: 'Plano 5',
    metrics: [
      { label: 'HB CONG', value: '83/89', status: 'success' },
      { label: 'CCR EXT', value: '42/67', status: 'warning', highlight: true },
      { label: 'KO INT', value: '64/86', status: 'success' },
      { label: 'KO EXT', value: '67/89', status: 'success' },
      { label: 'TIME LINE', value: '87/89', status: 'success' }
    ]
  },
  {
    title: 'Plano 6',
    metrics: [
      { label: 'HB CONG', value: '83/89', status: 'success' },
      { label: 'CCR EXT', value: '42/67', status: 'warning', highlight: true },
      { label: 'KO INT', value: '64/86', status: 'success' },
      { label: 'KO EXT', value: '67/89', status: 'success' },
      { label: 'TIME LINE', value: '87/89', status: 'success' }
    ]
  }
];

function App() {
  return (
    <div className="dashboard">
      <div className="dashboard-grid">
        {dashboardData.map((section, index) => (
          <SectionCard
            key={index}
            title={section.title}
            metrics={section.metrics}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
