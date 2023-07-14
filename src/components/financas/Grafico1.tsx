import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'center' as const,
    },
    title: {
      display: true,
      text: 'Gráfico 1',
    },
  },
};

const labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Receitas',
      data: [12820, 6000, 19490, 17938, 24182, 17842, 22475, 30001, 14522, 9490, 17938, 24182 ],
      backgroundColor: 'rgb(66, 132, 244)',
      borderRadius: 4,
    },
    {
      label: 'Despesas',
      data:[10000, 2000, 15000, 14000, 20000, 16000, 18000, 20000, 11000, 4000, 14000, 18000 ],
      backgroundColor: 'rgb(30, 69, 132)',
      borderRadius: 4,
    },
  ],
};

export function Grafico1() {
  return <Bar options={options} data={data} />;
}