import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
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
      text: 'Gráfico 2',
    },
  },
};

const labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Receitas',
      data: [1400, 1680, 1800, 1980, 2500, 2650, 3150, 3800, 3900, 4100, 4350, 4400, 5600],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.1)',
    },
    {
      fill: true,
      label: 'Despesas',
      data: [400, 600, 900, 1200, 1400, 1500, 1900, 2000, 1800, 1400, 1600, 1500, 1300, 1900],
      borderColor: 'rgb(114, 15, 114)',
      backgroundColor: 'rgb(119, 15, 104, 0.1)',
    },
  ],
};

export function Grafico2() {
  return <Line options={options} data={data} />;
}