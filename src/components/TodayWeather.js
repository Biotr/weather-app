
export const TodayWeather = ({ location, current, cityName }) => (
    <div>
        <h2>{cityName}</h2>
        <h3>{location.localtime_epoch}</h3>

        <div> </div>
        <div>
            <div>Temperatura</div>
            <div>{current.temp_c}°C</div>
            <div>{current.condition.text}</div>
            <div><div><p>Humdity</p><p>{current.humidity}%</p></div><div><p>Wind Speed</p><p>{current.wind_kph}km/h</p></div></div>
            <div>
                <div>
                    <p>Pressure</p>
                    <p>{current.pressure_mb}mb</p>
                </div>
                <div>
                    <p>Precipitation</p>
                    <p>{current.precip_mm}mm</p>
                </div>
            </div>
        </div>

    </div>
)
