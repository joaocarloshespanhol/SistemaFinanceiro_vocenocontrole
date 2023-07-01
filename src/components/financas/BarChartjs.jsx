import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = () => {
    const [chartData, setChartData] = useState ({
        datasets: [],

    });

const [chartOptions, setChartOptions] = useState({});

useEffect(() => {
    setChartData({
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [
            {
                label: 'Receitas',
                data: [12820, 2209, 19490, 17938, 24182, 17842, 22475, 30001, 14522, 9490, 17938, 24182 ],
                borderColor: 'rgb(0, 211, 183)',
                backgroundColor: 'rgb(0, 211, 183)',
                borderRadius: 6,
            },
        ]
    })
}, [])

    return (
        <>
            <div className="w-full">
                <Bar data={chartData} options={chartOptions} />
            </div>
        </>
    );
};

export default BarChart;