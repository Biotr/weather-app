import { DayWeather } from "./DayWeather"
import { ChartWeather } from "./ChartWeather"
import { useState } from "react"


export const ForecastWeather = ({ forecast }) => {
    const [day,setDay]=useState(0)
    const handleSelectDay=(id)=>{
        setDay(id)
    }
    
    return(
    <div>
        <ChartWeather day={day} forecast={forecast}/>
        {forecast.forecastday.map((day, id) => <DayWeather handleSelectDay={handleSelectDay} id={id} key={id} dailyWeather={day}/>)}
    </div>
)}