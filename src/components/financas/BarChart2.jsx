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
        datasets: [],

    });

const [chartOptions, setChartOptions] = useState({});

useEffect(() => {
    setChartData({
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [
            {
                label: 'Despesas',
                data: [1820, 2201, 19490, 17938, 24182, 17842, 22475],
                borderColor: 'rgb(199, 28, 57)',
                backgroundColor: 'rgb(53, 162, 235, 10',
                border: 2
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