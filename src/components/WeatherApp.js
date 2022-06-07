import React, { useState, useEffect } from 'react';
import { CityForm } from './CityForm';
import { ForecastWeather } from './ForecastWeather';
import { TodayWeather } from './TodayWeather'
import { useFetchApi } from '../hooks/useFetchApi';
import { geocodeByAddress } from 'react-places-autocomplete';
import Geocode from "react-geocode";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';





export const WeatherApp = () => {
    const [location, setLocation] = useState({ city: '', lat: null, lng: null });
    const { data, status } = useFetchApi(`http://api.weatherapi.com/v1/forecast.json?key=c1cea09db4c14ee1bad125331210612&q=${location.lat},${location.lng}&days=3&aqi=no&alerts=no`)

    const handleSelect = async (value) => {
        const results = await geocodeByAddress(value);
        setLocation({
            city: results[0].address_components[0].long_name,
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng()
        })
    }
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            Geocode.setApiKey("AIzaSyBJ7fhqNeSGZHPu7RPmjeDl5tLelMjEEss");
            Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then((response) => {
                response.results[0].address_components.forEach((address_component) => {
                    address_component.types.forEach(type => {
                        if (type === "locality") {
                            setLocation({
                                city: address_component.long_name,
                                lat: position.coords.latitude,
                                lng: position.coords.longitude
                            })
                        }
                    })
                })
            }, (error) => {
                console.error(error);
            }
            );
        })
    }, [])


    return (
        <>
            <div className="container__first">
                <CityForm handleSelect={handleSelect} />
                {status === 'fetched' && location.city !== '' ? <TodayWeather cityName={location.city} current={data.data.current} location={data.data.location} /> : "Loading"}
            </div>


            <div className="container__second">
                {status === 'fetched' && <ForecastWeather forecast={data.data.forecast} />}
            </div>



        </>




    )
}

