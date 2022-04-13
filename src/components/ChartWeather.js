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
import { getTime } from "../utilities/getTime"


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);
const reducer = (state, action) => {
    const labels = action.forecast.forecastday[0].hour.map((hour) => getTime(hour.time_epoch, 'hour'))
    switch (action.type) {
        case 'CHART_BY_RAIN_CHANCE':
            return ({
                chartData: {
                    labels: labels,
                    datasets: [{
                        label: "Rain Chance",
                        backgroundColor: "rgba(75,192,192,0.2)",
                        borderColor: "rgba(75,192,192,1)",
                        data: action.forecast.forecastday[action.day].hour.map((hour) => hour.chance_of_rain)
                    }, {
                        label: "Snow Chance",
                        backgroundColor: "rgba(255,250,250,0.2)",
                        borderColor: "rgba(235,230,230,1)",
                        data: action.forecast.forecastday[action.day].hour.map((hour) => hour.chance_of_snow)
                    }]
                },
                chartOptions: {
                    ...state.chartOptions,
                    scales: {
                        y: {
                            min: 0,
                            max: 100,
                            ticks: {
                                callback: value => `${value}%`
                            }
                        }
                    }
                }
            })
        case 'CHART_BY_TEMPERATURE':
            return ({
                chartData: {
                    labels: labels,
                    datasets: [{
                        label: "Temperature",
                        backgroundColor: "rgba(1255,140,0,0.2)",
                        borderColor: "rgba(255,140,0,1)",
                        data: action.forecast.forecastday[action.day].hour.map((hour) => hour.temp_c)
                    }]
                },
                chartOptions: {
                    ...state.chartOptions,
                    scales: {
                        y: {
                            ticks: {
                                callback: value => `${value}°C`
                            }
                        }
                    }
                }
            })
        case 'CHART_BY_WIND':
            return ({
                chartData: {
                    labels: labels,
                    datasets: [{
                        label: "Wind Speed",
                        backgroundColor: "rgba(192,192,192,0.2)",
                        borderColor: "rgba(192,192,192,1)",
                        data: action.forecast.forecastday[action.day].hour.map((hour) => hour.wind_kph)
                    }]
                },
                chartOptions: {
                    ...state.chartOptions,
                    scales: {
                        y: {
                            ticks: {
                                callback: value => `${value}km/h`
                            }
                        }
                    }
                }
            })
        default:
            return state;
    }
}


export const ChartWeather = ({ forecast, day }) => {
    const [state, dispatch] = useReducer(reducer, initialChart)
    const [type, setType] = useState({ chart: 'CHART_BY_RAIN_CHANCE', active: 'rain' })

    useEffect(() => {
        dispatch({ type: type.chart, day: day, forecast })
    }, [type, day, forecast])

    return (
        <div>
            <ul>
                <li className={type.active === 'rain' ? 'active' : ''} onClick={() => { setType({ chart: 'CHART_BY_RAIN_CHANCE', active: 'rain' }) }}>Fallout </li>
                <li className={type.active === 'temp' ? 'active' : ''} onClick={() => { setType({ chart: 'CHART_BY_TEMPERATURE', active: 'temp' }) }}>Temperature</li>
                <li className={type.active === 'wind' ? 'active' : ''} onClick={() => { setType({ chart: 'CHART_BY_WIND', active: 'wind' }) }}>Wind</li>
            </ul>
            <Line redraw={true} options={state.chartOptions} data={state.chartData} />
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