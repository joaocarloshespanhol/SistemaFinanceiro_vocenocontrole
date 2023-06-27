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

const BarChart2 = () => {
    const [chartData, setChartData] = useState ({
        datasets: [{
            backgroundColor: ['#0082C9', '#FCB813'],
            data: [60, 40],
            borderWidth: 1,
        }],

    });

const [chartOptions, setChartOptions] = useState({});

useEffect(() => {
    setChartData({
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [
            {
                backgroundColor: ['#0082C9', '#FCB813'],
                data: [60, 40],
                borderWidth: 1,
            },
        ]
    })
}, [])

    return (
        <>
            <div className="w-full">
                <Bar data={chartData} options={chartOptions} />
            </div>;
        </>
    );
};

export default BarChart2;