import { getTime } from "../utilities/getTime"



export const DayWeather = ({ dailyWeather,handleSelectDay,id}) => {

    return(
        <div onClick={()=>{handleSelectDay(id)}}>
            <div>{getTime(dailyWeather.date_epoch,'day')}</div>
            <div><img src={dailyWeather.day.condition.icon} alt="Logo" /></div>
            <div>Temperatura</div>
            <div>{dailyWeather.day.avgtemp_c}°C</div>
        </div>
    )
}