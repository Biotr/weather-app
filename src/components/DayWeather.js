export const DayWeather = ({ dailyWeather }) => (
    <div>
        <div>{dailyWeather.date_epoch}</div>
        <div><img src={dailyWeather.day.condition.icon} alt="Logo" /></div>
        <div>Temperatura</div>
        <div>{dailyWeather.day.avgtemp_c}°C</div>
    </div>
)