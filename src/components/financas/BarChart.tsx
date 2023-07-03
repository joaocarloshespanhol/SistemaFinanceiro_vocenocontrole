import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Gráfico Bola',
    },
  },
};

export const data = {
  
  labels: ['Receitas', 'Despesas',],
  datasets: [
    {
      data: [70, 20,],
      backgroundColor: [
        'rgb(0, 211, 183)',
        'rgb(192, 11, 65)',
      ],
      borderWidth: 0,
    },
    
  ],
};

export function BarChart() {
  return <Doughnut options={options} data={data} />;
}