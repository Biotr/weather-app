import { DayWeather } from "./DayWeather"
import { ChartWeather } from "./ChartWeather"
export const ForecastWeather = ({ forecast }) => (
    <div>
        <ChartWeather />
        {forecast.forecastday.map((day, id) => <DayWeather key={id} dailyWeather={day} />)}
    </div>
)