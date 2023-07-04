// import React, { useState, useEffect } from "react";
// import { Bar } from "react-chartjs-2";
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
// } from 'chart.js';

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// );

// const BarChart2 = () => {
//     const [chartData, setChartData] = useState ({
//         datasets: [],

//     });

// const [chartOptions, setChartOptions] = useState({
    
// });

// useEffect(() => {
//     setChartData({
//         labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
//         datasets: [
//             {
//                 label: 'Receitas',
//                 data: [12820, 6000, 19490, 17938, 24182, 17842, 22475, 30001, 14522, 9490, 17938, 24182 ],
//                 borderColor: 'rgb(0, 211, 183)',
//                 backgroundColor: 'rgb(0, 211, 183)',
//                 borderRadius: 2,
//             },
//             {
//                 label: 'Despesas',
//                 data: [10000, 2000, 15000, 14000, 20000, 16000, 18000, 20000, 11000, 4000, 14000, 18000 ],
//                 borderColor: 'rgb(192, 11, 65)',
//                 backgroundColor: 'rgb(192, 11, 65)',
//                 borderRadius: 3,
//             },
//         ]
//     })
// },

// [])

//     return (
//         <>
//             <div className="w-full">
//                 <Bar data={chartData} options={chartOptions} />
//             </div>
//         </>
//     );
// };

// export default BarChart2;


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
      position: 'top' as const,
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