import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

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
  return <Doughnut data={data} />;
}