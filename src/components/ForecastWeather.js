import { DayWeather } from "./DayWeather"
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { useReducer, useState, useEffect } from "react";
import forecastChartReducer from '../reducers/forecastChart'
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)



export const ForecastWeather = ({ forecast }) => {

    const [state, dispatch] = useReducer(forecastChartReducer, initialChart)
    const [type, setType] = useState({ chart: 'CHART_BY_RAIN_CHANCE', day: 0 })

    useEffect(() => {
        dispatch({ type: type.chart, day: type.day, forecast })
    }, [type, forecast])


    return (
        <div className="chart">

            <ul>
                <li className={type.chart === 'CHART_BY_RAIN_CHANCE' ? 'active' : ''} onClick={() => { setType({ ...type, chart: 'CHART_BY_RAIN_CHANCE' }) }}>Fallout </li>
                <li className={type.chart === 'CHART_BY_TEMPERATURE' ? 'active' : ''} onClick={() => { setType({ ...type, chart: 'CHART_BY_TEMPERATURE', }) }}>Temperature</li>
                <li className={type.chart === 'CHART_BY_WIND' ? 'active' : ''} onClick={() => { setType({ ...type, chart: 'CHART_BY_WIND', }) }}>Wind</li>
            </ul>
            <Line redraw={true} options={state.chartOptions} data={state.chartData} />


            <div className="days__info">{forecast.forecastday.map((day, id) => <DayWeather handleSelectDay={(day) => { setType({ ...type, day: day }) }} id={id} key={id} dailyWeather={day} />)}</div>
        </div>
    )
}


const initialChart = {
    chartData: {
        labels: [],
        datasets: [{
            label: "",
            data: [],
            backgroundColor: "",
            borderColor: ""
        }]
    },
    chartOptions: {
        fill: true,
        responsive: true,
        maintainAspectRatio: true,
    }
}