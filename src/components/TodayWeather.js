import { getTime } from "../utilities/getTime"


export const TodayWeather = ({ location, current, cityName }) => (
    <>

        <h1>{cityName}</h1>
        <p className="weather__time">{getTime(location.localtime_epoch, 'day_month_year')}</p>

        <div className="weather__image" style={{backgroundImage:`url(${current.condition.icon})`}}></div>

        <div className="today">
            <div className="today__short">
                <h2>TEMPERATURE</h2>
                <div className="today__temp">{current.temp_c}°C</div>
                <div className="today__condition">{current.condition.text}</div>
            </div>
            <div className="today__info">

                <div className="today__info--info">
                    <h3 >Humdity</h3>
                    <p >{current.humidity}%</p>
                </div>
                <div className="today__info--info">
                    <h3>Wind Speed</h3>
                    <p>{current.wind_kph}km/h</p>
                </div>


                <div className="today__info--info">
                    <h3 >Pressure</h3>
                    <p >{current.pressure_mb}mb</p>
                </div>
                <div className="today__info--info">
                    <h3>Precipitation</h3>
                    <p>{current.precip_mm}mm</p>
                </div>

            </div>
        </div>

    </>
)
