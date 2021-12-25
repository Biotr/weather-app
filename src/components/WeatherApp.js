import React, { useState, useEffect } from 'react';
import { CityForm } from './CityForm';
import { ForecastWeather } from './ForecastWeather';
import { TodayWeather } from './TodayWeather'
import { useFetchApi } from '../hooks/useFetchApi';
import { geocodeByAddress } from 'react-places-autocomplete';
import { userLocation } from '../utilities/useLocation';



export const WeatherApp = () => {
    const [location, setLocation] = useState({});
    const { data, status } = useFetchApi(`http://api.weatherapi.com/v1/forecast.json?key=c1cea09db4c14ee1bad125331210612&q=${location.lat},${location.lng}&days=3&aqi=no&alerts=no`)

    const handleSelect = async (value) => {
        const results = await geocodeByAddress(value);
        setLocation({
            city: results[0].address_components[0].long_name,
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng()
        })
    }



    return (
        <>
            <CityForm handleSelect={handleSelect} />
            {status === 'fetched' && <TodayWeather cityName={location.city} current={data.data.current} location={data.data.location} />}
            {status === 'fetched' && <ForecastWeather forecast={data.data.forecast} />}
        </>
    )
}

