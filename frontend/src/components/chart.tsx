import {Bar, Line, Pie} from 'react-chartjs-2';
import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement);


interface ChartComponentProps {
    type: 'bar' | 'line' | 'pie';
    data: any;
    options?: any;
}

const ChartComponent: React.FC<ChartComponentProps> = ({ type, data, options }) => {
    const renderChart = () => {
        switch (type) {
            case 'bar':
                return <Bar data={data} options={options} />;
            case 'line':
                return <Line data={data} options={options} />;
            case 'pie':
                return <Pie data={data} options={options} />;
            default:
                return <div>No chart type specified</div>;
        }
    };

    return <div>{renderChart()}</div>;
};

export default ChartComponent;