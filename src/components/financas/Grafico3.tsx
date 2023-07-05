import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'center' as const,
    },
    title: {
      display: true,
      text: 'Gráfico 3 - Clicar para visualizar',
    },
  },
};

export const data = {
  
  labels: ['Receitas', 'Despesas'],
  datasets: [
    
    {
      data: [80, 20,],
      backgroundColor: ['rgb(66, 132, 244)', 'rgb(30, 69, 132)'],
      borderWidth: 0,
    },
  ],
};

export function Grafico3() {
  return <Doughnut data={data} options={options} />;
}