import { getTime } from "../utilities/getTime"


export const TodayWeather = ({ location, current, cityName }) => (
    <>

        <h1>{cityName}</h1>
        <p className="today__time">{getTime(location.localtime_epoch, 'day_month_year')}</p>

        <div className="weather__image">{<img width={150} src={current.condition.icon} alt="Weather" />}</div>

        <div className="today">
            <div className="today__short">
                <h2>TEMPERATURE</h2>
                <div className="today__temp">{current.temp_c}°C</div>
                <div className="today__condition">{current.condition.text}</div>
            </div>
            <div className="today__info">

                <div className="today__info--info">
                    <h2 >Humdity</h2>
                    <p >{current.humidity}%</p>
                </div>
                <div className="today__info--info">
                    <h2>Wind Speed</h2>
                    <p>{current.wind_kph}km/h</p>
                </div>


                <div className="today__info--info">
                    <h2 >Pressure</h2>
                    <p >{current.pressure_mb}mb</p>
                </div>
                <div className="today__info--info">
                    <h2>Precipitation</h2>
                    <p>{current.precip_mm}mm</p>
                </div>

            </div>
        </div>

    </>
)
